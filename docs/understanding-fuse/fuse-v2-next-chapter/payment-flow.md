# Payment Flow

## The flow

When a user wants to pay a merchant, the following steps take place:

* The user opens the application developed by an operator and initiates the payment flow through the application.
* The operator's application behind the scenes signs the transaction with the user's private key and relays the signed transaction to the Power Validators network using Fuse-SDK.
* Power Validators receive such transactions, validate them, bundle them together, and relay them to the blockchain network.
* The transactions are confirmed by the validators and added to blocks.
* The merchants receive the funds in their wallets.

### The services to make it work

* Client application - the application in which the SDK is utilized to make the abovementioned payment flow possible. The client application is also responsible for utilizing other solutions for authenticating users and securing their private keys to sign and authorize the transaction requests off-chain on the client side. Client applications can also utilize or implement extra features like payment links to pay for products and services online or notify the end-users with push notifications when they receive payments.&#x20;
* APIs/SDK - enables creating and managing wallets for the users and the merchants, sending transactions to the blockchain through the relayers, and notifying the client application about the statuses of the transactions with events.
* Relayer - receiving transaction requests, verifying them, and submitting them to the blockchain by covering the gas fees.&#x20;

For the use of all those services, operators are paying the Power Validators.

