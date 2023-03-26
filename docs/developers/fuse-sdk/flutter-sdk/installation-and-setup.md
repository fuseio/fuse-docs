# Installation and Setup

#### **Installation and Setup**

To get started with the Flutter SDK, add the following dependency to your project's `pubspec.yaml`file:

```dart
dependencies:
	fuse_wallet_sdk: ^0.1.0
```

Then, run the following command to download the package:

```bash
flutter pub get
```

Once you have installed the package, you can import it into your Dart code:

```dart
import 'package:fuse_wallet_sdk/fuse_wallet_sdk.dart';
```

### Usage

To use the Fuse Wallet Flutter SDK in your project, you must create an instance of the **`FuseWalletSDK`** class. This class is the key to interacting with the Fuse Wallet API using the SDK. Fortunately, the `FuseWalletSDK` class provides a range of instance methods, allowing you to execute various operations with the API.

Whether you aim to fetch or create a smart wallet, relay an ERC20/FUSE transfer, relay an ERC721 transfer, relay a generic transaction, swap tokens, or stake tokens, the `FuseWalletSDK` class has covered you. Additionally, the SDK provides data features that allow you to get the list of tokens owned by an address, get token details, and get a smart wallet's token balance.

The following code initializes the Fuse Wallet SDK and creates an instance of the `SmartWalletsSDK` class. The `publicApiKey` variable should be set to your own API key.

```dart
import 'package:fuse_wallet_sdk/fuse_wallet_sdk.dart';

final String publicApiKey = '<YOUR_API_KEY>';
final FuseWalletSDK fuseWalletSDK = FuseWalletSDK(publicApiKey);
```

Once you have created an instance of the `FuseWalletSDK` \*\*\*\*class, you can use its instance methods to interact with the Fuse Wallet API. In the following section, we will cover the available methods of the SDK.
