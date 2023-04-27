---
sidebar_position: 3  
---
# Features

## Core Features

### Authentication

The `authenticate` method is a fundamental feature of the Fuse Wallet Flutter SDK that enables you to authenticate the user's provided credentials. When you send a request to the server using this method, it verifies the credentials and returns a JSON Web Token (JWT) if the credentials are valid. The JWT is then used to make authenticated API requests, which allows you to access the Fuse Wallet API securely.

```dart
// Generate a random Ethereum private key
final String privateKey = await Mnemonic.generatePrivateKey();
final EthPrivateKey credentials = EthPrivateKey.fromHex(privateKey);

final result = await FuseWalletSDK.authenticate(credentials);
if (result.hasError) {
  // Handle authentication error
} else if (result.hasData) {
  final jwt = result.data!;
  // Use the JWT token to make authenticated API requests
}
```

### **Creating a Smart Wallet**

To create a new Fuse Smart Wallet, you can use the **`createWallet`** method. Before calling the method, you can subscribe to any of the events as shown below:

```dart
// Create Wallet
final exceptionOrStream = await fuseWalletSDK.createWallet();

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else if (exceptionOrStream.hasData) {
  final smartWalletEventStream = exceptionOrStream.data!;
  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case "smartWalletCreationStarted":
          print('smartWalletCreationStarted ${event.data.toString()}');
          break;
        case "transactionHash":
          print('transactionHash ${event.data.toString()}');
          break;
	case "smartWalletCreationSucceeded":
	  print('smartWalletCreationSucceeded ${event.data.toString()}');
	  break;
        case "smartWalletCreationFailed":
	  print('smartWalletCreationFailed ${event.data.toString()}');
          break;
      }
   },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
      exit(1);
    },
  );
}
```

### **Retrieving an existing Smart Wallet**

To retrieve an existing Fuse Smart Wallet, you can use the **`retrieveWallet`** method. If the wallet cannot be found, the function will return an error:

```dart
// Try to fetch a wallet for the EOA, if it doesn't exist create one
final walletData = await fuseWalletSDK.fetchWallet();

walletData.pick(
	onData: (SmartWallet smartWallet) async {
    print('Smart wallet address ${smartWallet.smartWalletAddress}');
  },
  onError: (Exception exception) async {
		print('Fetching wallet failed.');
	}
)
```

### Fetch or Create a Smart Wallet

Since each externally owned account (EOA) can only have one associated Fuse Smart Wallet, attempting to create a new smart wallet for a user that already has one will result in an error.&#x20;

For this reason, we suggest using the following code example to either fetch an existing wallet for the authenticated user if one exists or to create a new one if it does not.

```dart
// Try to fetch a wallet for the EOA, if it doesn't exist create one
final walletData = await fuseWalletSDK.fetchWallet();

walletData.pick(
  onData: (SmartWallet smartWallet) async {
    print('Smart wallet address ${smartWallet.smartWalletAddress}');
  },
  onError: (Exception exception) async {
    print('Failed to fetch wallet.');
    print('Trying to create...');

    final exceptionOrStream = await fuseWalletSDK.createWallet();
    if (exceptionOrStream.hasError) {
      print(exceptionOrStream.error.toString());
    } else if (exceptionOrStream.hasData) {
      final smartWalletEventStream = exceptionOrStream.data!;
      smartWalletEventStream.listen(
        (SmartWalletEvent event) {
	 switch (event.name) {
	    case "smartWalletCreationStarted":
	      print('smartWalletCreationStarted ${event.data.toString()}');
	      break;
	    case "transactionHash":
	      print('transactionHash ${event.data.toString()}');
	      break;
	    case "smartWalletCreationSucceeded":
	      print('smartWalletCreationSucceeded ${event.data.toString()}');
	      break;
	    case "smartWalletCreationFailed":
	      print('smartWalletCreationFailed ${event.data.toString()}');
	      break;
	  }
	},
	onError: (error) {
	  print('Error occurred: ${error.toString()}');
	  exit(1);
	},
      );
    }
  },
);
```

### Transfer ERC20 Token/ Native FUSE

To transfer an ERC20/FUSE with a relay, use the `transferToken` method. This method relays the transaction and covers the gas fees for the user, so they don't need to worry about those fees.

You can also subscribe to events related to the token transfer to track its progress. The method takes the following parameters as inputs:

| Parameter    | Description                                     |
| ------------ | ----------------------------------------------- |
| tokenAddress | The contract address of the ERC20 token or FUSE |
| toAddress    | The recipient's wallet address                  |
| amount       | The amount to transfer                          |

```dart
final String toAddress = 'RECEIVER_ADDRESS'; // "0x..."
final String amount = 'AMOUNT'; // "0.01"
final String tokenAddress = 'TOKEN_ADDRESS'; // "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

// Sending a gasless transaction
final exceptionOrStream = await fuseWalletSDK.transferToken(
  credentials,
  tokenAddress,
  toAddress,
  amount,
);

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else {
  final smartWalletEventStream = exceptionOrStream.data!;
  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case 'transactionStarted':
          print('transactionStarted ${event.data.toString()}');
          break;
        case 'transactionHash':
          print('transactionHash ${event.data.toString()}');
          break;
        case 'transactionSucceeded':
          print('transactionSucceeded ${event.data.toString()}');
          break;
        case 'transactionFailed':
          print('transactionFailed ${event.data.toString()}');
          break;
      }
    },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
    },
  );
}
```

### Transfer NFT

To transfer an ERC721 (NFT) asset with a relay, use the `transferNFT` method. This method also relays the transaction and covers the gas fees for the user, so they don't need to worry about those fees. The method takes the following parameters as inputs:

| Parameter          | Description                              |
| ------------------ | ---------------------------------------- |
| nftContractAddress | The contract address of the ERC721 asset |
| toAddress          | The recipient's wallet address           |
| tokenId            | The ID of the asset you wish to transfer |

To ensure your transfer request is successful, you should subscribe to the transactionStarted, transactionHash, transactionSucceeded, and transactionFailed events of the FuseWalletSDK instance. This will allow you to monitor the transaction as it progresses through the network and handle any errors that may occur.

```dart
// Sending a gasless transaction
final exceptionOrStream = await fuseWalletSDK.transferNft(
  credentials,
  nftContractAddress,
  receiverAddress,
  tokenId,
);

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else {
  final smartWalletEventStream = exceptionOrStream.data!;

  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case "transactionStarted":
          print('transactionStarted ${event.data.toString()}');
          break;
        case "transactionHash":
          print('transactionHash ${event.data.toString()}');
          break;
        case "transactionSucceeded":
          print('transactionSucceeded ${event.data.toString()}');
          break;
        case "transactionFailed":
          print('transactionFailed ${event.data.toString()}');
          exit(1);
      }
    },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
      exit(1);
    },
  );
}
```

### Swap tokens

To exchange one token for another, use the `swapTokens` method. This method swaps the token with the contract address specified in the `currencyIn` parameter for the token with the contract address specified in the `currencyOut` parameter at the current market price.&#x20;

Additionally, this method relays the transaction and covers the gas fees for the user, so they don't need to worry about those fees.

The method requires a `TradeRequestBody` parameter with the following properties:

| Parameter   | Description                                      |
| ----------- | ------------------------------------------------ |
| currencyIn  | The contract address of the token to be swapped. |
| currencyOut | The contract address of the token to swap for.   |
| amountIn    | The amount of currencyIn to swap.                |
| recipient   | The recipient address for the swapped tokens.    |

To ensure your transfer request is successful, subscribe to the transactionStarted, transactionHash, transactionSucceeded, and transactionFailed events of the FuseWalletSDK instance. This will allow you to monitor the transaction as it progresses through the network and handle any errors that may occur.

```dart
final TradeRequestBody tradeRequestBody = TradeRequestBody(
  currencyIn: 'CURRENCY_IN',
  currencyOut: 'CURRENCY_OUT',
  amountIn: 'AMOUNT',
  recipient: 'RECIPIENT_ADDRESS',
);

// Sending a gasless transaction
final exceptionOrStream = await fuseWalletSDK.swapTokens(
  credentials,
  tradeRequestBody,
);

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else {
  final smartWalletEventStream = exceptionOrStream.data!;

  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case "transactionStarted":
          print('transactionStarted ${event.data.toString()}');
          break;
        case "transactionHash":
          print('transactionHash ${event.data.toString()}');
          break;
        case "transactionSucceeded":
          print('transactionSucceeded ${event.data.toString()}');
          break;
        case "transactionFailed":
          print('transactionFailed ${event.data.toString()}');
          exit(1);
      }
    },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
      exit(1);
    },
  );
}
```

## Data Features

### **Get the list of tokens owned by address**

The `getTokenList` function allows you to get the list of tokens owned by a specific address. You can use this function to retrieve information such as the token name, symbol, and balance. The function returns a `TokenList` object that contains a list of `Token` objects, each of which represents a token owned by the specified address.

```dart
final String address = 'ADDRESS';
final tokenListData = await fuseWalletSDK.explorerModule.getTokenList(
  address,
);
tokenListData.pick(
  onData: (TokenList tokenList) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

### Get token details

The `getTokenDetails` function allows you to retrieve detailed information about a specific ERC20 token. This includes the token's name, symbol, decimal places, and total supply. To use the `getTokenDetails` function, you need to provide the contract address of the ERC20 token that you want to retrieve information from. Once you call the function, it will return a `TokenDetails` object that contains all the relevant information about the token.

```dart
final String tokenAddress = 'TOKEN_ADDRESS';
final tokenDetailsData = await smartWalletsSDK.explorerModule.getTokenDetails(
  tokenAddress,
);

tokenDetailsData.pick(
  onData: (TokenDetails tokenList) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

### Get Smart Wallet’s token balance

The `getTokenBalance` function allows you to retrieve the balance of a specific ERC20 token owned by a Fuse wallet. You will need to provide the contract address of the token and the address of the Fuse wallet. The function returns the balance as a `BigInt` object, which you can use to perform further calculations or display the balance to the user.

```dart
final String tokenAddress = 'TOKEN_ADDRESS';
final String smartWalletAddress = 'WALLET_ADDRESS';
final tokenBalanceData = await smartWalletsSDK.explorerModule.getTokenBalance(
  tokenAddress,
  smartWalletAddress,
);

tokenBalanceData.pick(
  onData: (BigInt value) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

## Staking Features

### Get staking options

```dart
final stakingOptionsData = await smartWalletsSDK.stakingModule.getStakingOptions();
stakingOptionsData.pick(
  onData: (List<StakingOption> data) {
    // Do you magic here
  },
  onError: (Exception err) {
    // Handle errors
  }
);
```

### Stake

```dart
final StakeRequestBody stakeRequestBody = StakeRequestBody(
  accountAddress: 'YOUR_SMART_WALLET_ADDRESS',
  tokenAmount: 'AMOUNT', // "0.01"
  tokenAddress: 'TOKEN_ADDRESS', // "0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4"
);
// Sending a gasless transaction
final exceptionOrStream = await smartWalletsSDK.stakeToken(
  credentials,
  stakeRequestBody,
);

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else {
  final smartWalletEventStream = exceptionOrStream.data!;

  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case "transactionStarted":
          print('transactionStarted ${event.data.toString()}');
          break;
        case "transactionHash":
          print('transactionHash ${event.data.toString()}');
          break;
        case "transactionSucceeded":
          print('transactionSucceeded ${event.data.toString()}');
          break;
        case "transactionFailed":
          print('transactionFailed ${event.data.toString()}');
          exit(1);
      }
    },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
      exit(1);
    },
  );
}
```

### Unstake

```dart
final UnstakeRequestBody unstakeRequestBody = UnstakeRequestBody(
  accountAddress: 'YOUR_SMART_WALLET_ADDRESS',
  tokenAmount: 'AMOUNT', // "0.01"
  tokenAddress: 'TOKEN_ADDRESS', // "0x34Ef2Cc892a88415e9f02b91BfA9c91fC0bE6bD4"
);

// Sending a gasless transaction
final exceptionOrStream = await smartWalletsSDK.unstakeToken(
  credentials,
  unstakeRequestBody,
);

if (exceptionOrStream.hasError) {
  print(exceptionOrStream.error.toString());
} else {
  final smartWalletEventStream = exceptionOrStream.data!;

  smartWalletEventStream.listen(
    (SmartWalletEvent event) {
      switch (event.name) {
        case "transactionStarted":
          print('transactionStarted ${event.data.toString()}');
          break;
        case "transactionHash":
          print('transactionHash ${event.data.toString()}');
          break;
        case "transactionSucceeded":
          print('transactionSucceeded ${event.data.toString()}');
          break;
        case "transactionFailed":
          print('transactionFailed ${event.data.toString()}');
          exit(1);
      }
    },
    onError: (error) {
      print('Error occurred: ${error.toString()}');
      exit(1);
    },
  );
}
```

### Get staked tokens

```dart
final smartWalletAddress = 'YOUR_SMART_WALLET_ADDRESS';
final stakedTokensData = await smartWalletsSDK.stakingModule.getStakedTokens(smartWalletAddress);

stakedTokensData.pick(
  onData: (StakedTokenResponse data) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  }
);
```

## Trade Features

### Get token price

```dart
final tokenAddress = 'TOKEN_ADDRESS';
final priceData = await smartWalletsSDK.tradeModule.price(tokenAddress);
priceData.pick(
  onData: (String tokenPrice) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

### Get token price change in the last 24 hours

```dart
final tokenAddress = 'TOKEN_ADDRESS';
final priceChangeData = await smartWalletsSDK.tradeModule.priceChange(tokenAddress);
priceChangeData.pick(
  onData: (String priceInfo) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

### Get price change in interval

```dart
final tokenAddress = 'TOKEN_ADDRESS';
final intervalData = await smartWalletsSDK.tradeModule.interval(tokenAddress, TimeFrame.day);
intervalData.pick(
  onData: (List<IntervalStats> stats) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

### Get the list of supported tokens

```dart
final tokensData = await smartWalletsSDK.tradeModule.fetchTokens();
tokensData.pick(
  onData: (List<TokenDetails> tokens) {
    // Do you magic here
  },
  onError: (err) {
    // Handle errors
  },
);
```

## Code examples

For more code examples on using the Fuse Wallet SDK for Flutter, you can check out the official [**Flutter SDK repository**](https://github.com/fuseio/smart\_wallets\_sdk/tree/master/example).
