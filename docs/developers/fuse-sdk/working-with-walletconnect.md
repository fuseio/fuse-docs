# Working with WalletConnect

WalletConnect is an open-source protocol that allows for a seamless connection between decentralized applications ("dapps") and mobile wallets. It provides a secure way for users to interact with dapps directly from their mobile phones, ensuring that their sensitive information remains protected. This is especially important when compared to desktop or browser extension wallets, which can be more vulnerable to security breaches. Additionally, WalletConnect-enabled wallets offer greater convenience, as users can easily scan QR codes or use deep linking to connect to dapps. With WalletConnect, users can experience the benefits of decentralized finance without having to sacrifice security or ease of use.

Our smart contract wallets are fully compatible with the WalletConnect protocol.

When integrating WalletConnect into your Dapp, it is important to consider how smart contract wallets are affected. Specifically, pay attention to how accounts are exposed in the session, how message signatures are returned, and how transactions are broadcasted.

### Accounts

When connecting your Dapp to a smart contract wallet, you will be provided with the actual contract address for the wallet. It is important to note that this should not be confused with delegate keys, which are utilized for message and transaction signing (i.e. the `ownerAddress` of the Smart Wallet).

Smart contract wallets can be detected by on-chain verification to determine if the given address has any associated code deployed.

The below code examples can be used in order to check if a given address is a smart contract or a regular address.

```jsx
const rpcUrl = '<https://rpc.fuse.io>';

// with ethers
import { providers, utils } from "ethers";

const provider = new providers.JsonRpcProvider(rpcUrl);

const bytecode = await provider.getCode(address);

const isSmartContract = bytecode && utils.hexStripZeros(bytecode) !== "0x";

// with web3
import Web3 from "web3";

const web3 = new Web3(rpcUrl);

const bytecode = await web3.eth.getCode(address);

const isSmartContract = bytecode && utils.hexStripZeros(bytecode) !== "0x";
```

Smart contract wallets are essentially multi-signature wallets that use multiple keys to authorise operations on behalf of these smart contract accounts. As you develop your dapp, it is important to carefully consider how messages and transactions are handled, to ensure smooth and secure operations.

### Messages

When verifying messages from signatures of "normal" accounts which are Externally Owned Accounts (EOA), the ECDSA method called `ecrecover()` is usually used. This method returns the corresponding public key, which can then be mapped to an address.

However, if you are dealing with Smart Contract Wallets, you cannot sign a message with the smart contract account. In this case, the standard [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) was defined to outline a validation method that can be called on-chain and is labeled `isValidSignature()`.

Overall, using `ecrecover()` for normal accounts and `isValidSignature()` for Smart Contract Wallets can help ensure secure and accurate message verification.

```solidity
contract ERC1271 {
  bytes4 constant internal MAGICVALUE = 0x1626ba7e;

  function isValidSignature(
    bytes32 _hash,
    bytes memory _signature
  )
    public
    view
    returns (bytes4 magicValue);
}
```

This method requires a single parameter, `_hash`, which must comply with [EIP-191](https://eips.ethereum.org/EIPS/eip-191) and may be calculated using:

```jsx
// ethers
import { utils } from "ethers";

const hash = utils.hashMessage(message);

// web3
import Web3 from "web3";

const web3 = new Web3(rpcUrl);

const hash = web3.eth.accounts.hashMessage(message);
```

### Transactions

Smart Contract wallets, such as the [Fuse Smart Contract Wallets](https://github.com/fuseio/fuse-wallet-contracts), assertively employ the concept of meta-transactions. These transactions, which are signed by one or more key pairs, are elegantly submitted to the Fuse network by a relayer.

The wallet owner has the authority to sign an amount, and the relayer is solely responsible for paying the gas fee (in FUSE). The wallet will then refund the relayer (in FUSE or ERC20 tokens) up to the authorized amount.

Your dapp manages this seamlessly with the mobile wallet application. Simply submit a regular `{ to, value, data }` transaction to the web3 provider, which will then be transmitted to the mobile wallet application through WalletConnect.

The mobile wallet will convert the data into a meta transaction with the following parameters:

* `to` will be the address of the `RelayerManager` contract
* `data` will be the encoded data of the `execute()` method call with the relevant parameters

Your dapp will receive the transaction hash for monitoring the transaction status, and events will be emitted as usual.

The relayer can confidently replay a transaction with a higher gas price, which is necessary due to the ever-changing network conditions. This is done by modifying the transaction hash, which the Dapp will not be able to detect.

A straightforward solution would be for your Dapp to observe a specific event being emitted instead of relying on transaction status. It is worth noting there is ongoing work on standardizing events for transaction replies, which has been proposed with [EIP-2831](https://eips.ethereum.org/EIPS/eip-2831). Rest assured that we will keep improving our SDKs to accommodate this standard in the future.
