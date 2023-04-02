# Migration Guide

## Migration Guide

The new Smart Wallets SDK uses the same smart contract wallet architecture. Therefore, the migration to the SDK will be seamless for existing projects. We have already migrated all previously created wallets, but some breaking changes must be considered.

## Changes from Charge Wallet SDK to Smart Wallets SDK

### Field name changes

The following field names have changed in Smart Wallets SDK:

* `accountAddress` field name has changed to `ownerAddress` and the new field contains a checksum value instead of an all-lowercase string.
* `walletAddress` field name has changed to `smartWalletAddress`

### Removed fields

The following fields were removed and do not exist in the smart wallet schema:

* `backup`
* `balancesOnForeign`
* `apy`

### Deprecated APIs

* **Job API** was deprecated, and instead, an event-driven architecture was implemented. Therefore to check the status of relay jobs, developers now need to use the SDK events, which also improve the overall experience and performance of the SDK.
* **Sign-up and Login APIs** were deprecated, and Smart Wallets SDK no longer provides end-user authentication. If needed, developers must implement end-user authentication and map created Smart Wallets with their users’ accounts on their backend.
* **Backup API** was deprecated, and developers must implement a backup of private keys for their users if needed.
* **Contacts API** was deprecated and developers need to implement any contacts-related features in their apps.

## Migration

If you have an app that uses Charge Wallets SDK and you would like to migrate to the new Smart Wallets SDK and allow your users to access their existing wallets, all you have to do is to get your users to recover their wallets by importing their credentials they had in the old version to the new version.&#x20;

The Smart Wallet SDK will return the same wallet as before with the recovered credentials.

Here’s an example of how the migration would work for a wallet that was created in the old SDK to the new SDK:

#### Create a wallet with the old SDK

```dart
import 'dart:convert';
import 'dart:io';

import 'package:charge_wallet_sdk/charge_wallet_sdk.dart';

void main() async {
  // Your public API key (<https://chargeweb3.com>)
  final String PUBLIC_API_KEY = 'YOUR_PUBLIC_API_KEY'; 

  // generate mnemonic
  String mnemonic = Web3.generateMnemonic();
  print('mnemonic: $mnemonic');

  // get private key from mnemonic
  String privateKey = Web3.privateKeyFromMnemonic(mnemonic);
  print('privateKey: $privateKey');

  // init web3 module
  final Web3 web3 = Web3();

  // set web3 credentials with private key
  await web3.setCredentials(privateKey);

  // get account address
  String accountAddress = await web3.getAddress();
  print('account address: $accountAddress');

  // init api module
  ChargeApi chargeApi = ChargeApi(PUBLIC_API_KEY);

  // login
  print('enter phone number and press ENTER');
  String phoneNumber =
      stdin.readLineSync(encoding: Encoding.getByName('utf-8')!)!;
  await chargeApi.loginWithSMS(phoneNumber);

  // verify
  print('enter sms verification code and press ENTER');
  String verificationCode =
      stdin.readLineSync(encoding: Encoding.getByName('utf-8')!)!;
  String jwtToken = await chargeApi.verifySMS(
    verificationCode,
    phoneNumber,
    accountAddress,
  );
  print('jwtToken: $jwtToken');

  // create wallet
  Map<String, dynamic> response = await chargeApi.createWallet();
  Map<String, dynamic> walletData;
  if (!response.containsKey('job')) {
    print('Wallet already created for $accountAddress');
    walletData = response;
  } else {
    print('Creating wallet for $accountAddress');
    final Map jobData = response['job']['data'];
    walletData = Map<String, dynamic>.from({
      ...jobData,
      'networks': ['fuse'],
    });
  }
  final WalletModules walletModules = WalletModules.fromJson(
    walletData['walletModules'],
  );

  // Initiate wallet modules
  web3.setModules(walletModules);

  // get wallet
  dynamic wallet = await chargeApi.getWallet();
  print('wallet: $wallet');

  String walletAddress = wallet["walletAddress"];
  print('walletAddress: $walletAddress');
}
```

#### Fetching a wallet that was already created with Smart Wallets SDK

The following code example shows how to either fetch an existing wallet for the authenticated user if one exists or create a new one if it does not.

```dart
import 'dart:convert';
import 'dart:io';

import 'package:fuse/fuse_wallet_sdk.dart';

void main() async {
  // Create a project: https://chargeweb3.com
  final String publicApiKey = 'YOUR_PUBLIC_API_KEY';
  
	print('Enter privateKey:');
	String privateKey =
        stdin.readLineSync(encoding: Encoding.getByName('utf-8')!)!;
  final EthPrivateKey credentials = EthPrivateKey.fromHex(privateKey);
  
	print('privateKey: $privateKey');
  print('address: ${credentials.address.hexEip55}');
  
	// Initialize FuseWalletSDK
	final FuseWalletSDK fuseWalletSDK = FuseWalletSDK(publicApiKey);
  final DC<Exception, String> authRes = await fuseWalletSDK.authenticate(
    credentials,
  );
  if (authRes.hasError) {
    print("Error occurred in authenticate");
    print(authRes.error);
  } else {
    final walletData = await fuseWalletSDK.fetchWallet();

    walletData.pick(
      onData: (SmartWallet smartWallet) {
        print('Smart Wallet fetched successfully: ${smartWallet.toString()}')
      },
      onError: (Exception exception) async {
        print('Failed to fetch');
        print('Trying to create...');
        
				// Create wallet subscriptions
        fuseWalletSDK.on('smartWalletCreationStarted', (eventData) {
          print('smartWalletCreationStarted ${eventData.toString()}');
        });

        fuseWalletSDK.on('transactionHash', (eventData) {
          print('transactionHash ${eventData.toString()}');
        });

        fuseWalletSDK.on('smartWalletCreationSucceeded', (eventData) {
          print('smartWalletCreationSucceeded ${eventData.toString()}');
          exit(1);
        });

        fuseWalletSDK.on('smartWalletCreationFailed', (eventData) {
          print('smartWalletCreationFailed ${eventData.toString()}');
          exit(1);
        });

        // Create Wallet
        await fuseWalletSDK.createWallet();
      },
    );
  }
}
```
