# Payment Primitives

## Payment Primitives

Payment primitives are the building blocks of the Web3 economy. They are easily integrated into applications and smart contracts to build complex systems.

## Smart Wallets

On Fuse, we envisage every user or merchant represented by Smart Wallets, smart contract wallets deployed on the Fuse network. This architecture provides several advantages to Operators and developers for blockchain-based financial applications.

For example, in a regular blockchain wallet, the user must manage their funds and interact with protocols and smart contracts directly, i.e., sign approvals and deal with the mechanics of fund management—a daunting task, even for veterans.

Imagine this as a non-custodial decentralized "bank account" that can help consumers retrieve and manage funds more safely or add new features or tools for easier and safer self-custody.

We aim to introduce a standard for smart contract wallets on Fuse that, in the future, can interact natively with every decentralized application on the network.

With smart wallet accounts, we can introduce the following modules, which are upgradeable and controlled by the user.

## Privacy for payments

Many businesses and users need privacy to embrace web3 payments for their everyday needs. They want to be able to send and receive private transactions and conceal their balances from the public.

However, privacy had only been the focus of public blockchains for a short time, and the technology still needed to mature. This is starting to change, as we see in the coming of age of the Zero-Knowledge Proof (ZKP) technology.

What Is Zero-Knowledge-Proofs (ZKPs) - With a zero-knowledge proof, one party (the prover) can prove to another party (the verifier) that a given statement is valid. In contrast, the prover avoids conveying additional information apart from what is needed to verify that the statement is true.

How do we plan to use ZKPs? First, we would like to apply ZK proofs to build a private ledger where transactions are concealed (encrypted). However, anyone can still verify that transactions are legitimate and adequately executed without exposing user data and transaction details.

## Benefits of the UTXO Model

In addition to using ZKPs, the Settlement Layer must rely on a new transaction model.

The Fuse Network, just like Ethereum, uses an account model for balance management. This model assigns a balance to each public address and is stored in the ledger state.&#x20;

Account-based models have the advantages of simplicity and ease of use for smart contracts, but their two significant drawbacks are that: 1) it’s harder to scale, and 2) it’s complex to apply ZK proofs to that model.

Instead, we suggest a UTXO model ([Unspent transaction output](https://en.wikipedia.org/wiki/Unspent\_transaction\_output)) similar to the one used in Bitcoin for the Settlement Layer. In this model, each user owns multiple notes with various denominations, and his balance is calculated by the sum of notes he holds. Both the note denominations are encrypted and concealed from the public. This works like cash - I have money in my wallet, but no one can check my wallet without my consent.&#x20;

## Scalability

The following options are considered with a view to improving the scalability of the execution layer:

### Storing ZKPs in a dedicated Data Availability layer

Since ZK proofs for batching transactions can be long, the Settlement layer will bloat by their size. We aim to keep the Settlement layer decentralized and run by the community, so we expect it to be a problem. To cope with this, they submit proofs to the Settlement layer instead of introducing them to the Data Availability layer.&#x20;

As a result, the Power Validators will run a trustable data availability layer. Eventually, to withdraw funds from the execution layer, behind the scenes, the user will need to fetch the proof from the data availability layer and submit it as an argument to the bridge contract.&#x20;

### Parallelization

The UXTO model is easier to run in parallel, using multiple threads of the instance running the node. However, to execute transactions in parallel safely, the sender must specify a strict access list of addresses he will use.

## Recurring payments and more

Recurring payments are a vital component of any payment infrastructure as they facilitate the creation of subscription models where users pay a monthly fee for a service. In the traditional payment ecosystem, payments are executed on a pull basis, implementing recurring payments effortlessly.&#x20;

However, in the blockchain environment, recurring payments cannot be achieved natively due to the push payments nature of blockchain transactions, where users need to authorize transactions actively.

Although this push payments feature of blockchain can be advantageous as it prevents users from continuously paying for services they don't use, there are still instances where users would like to pay continuously for a service without confirming payments each month.

To address the challenge of implementing recurring payments in a push-based blockchain payment infrastructure. One promising solution is to employ smart contracts that define specific rules allowing payees to pull payments frequently.&#x20;

Smart wallet architecture can facilitate this, enabling payers to manage a list of recurring payments, each with unique logic.

Under this system, payees can claim the funds every month, similar to the vesting process, with the vital distinction being that the user's smart wallet serves as the vesting contract. This approach offers a reliable and secure method for enabling recurring payments in a push-based blockchain payment ecosystem.

Our payment infrastructure can support many use cases beyond recurring payments. We are thrilled to explore the limitless possibilities for leveraging blockchain technology to revolutionize the payment industry.&#x20;

Here are some further examples of the use cases that we envision our infrastructure enabling:

1. Split Payments - Paying multiple parties at once - e.g., in a marketplace, paying the sellers and the service fees of operators of marketplaces at once&#x20;
2. Recurring Payments - enables subscription models and automated investing such as dollar cost averaging (DCA).
3. Social Recovery - The user's wallet can be recovered by its operator, friends, or any third party.&#x20;
4. Payment Links - Paying and receiving payments can be simplified using SCWs.&#x20;
5. Payment Streaming - Continuous Micropayments like Superfluid - e.g., this is useful for streaming services (pay as you watch/listen, or ride-sharing services - pay as you go).
6. Soulbound token (SBT) integrations - Issue an SBT to the verified users. For instance, holding an SBT could give a user the right to claim an ENS name.

## Payment Flow

When a user wants to pay a merchant, the following steps occur

* The user opens the application developed by an operator and initiates the payment flow through the application.
* The operator's behind-the-scenes application signs the transaction with the user's private key and relays the signed transaction to the Power Validators network using Fuse-SDK.
* Power Validators receive such transactions, validate them, bundle them, and relay them to the blockchain network.
* The transactions are confirmed by the validators and added to blocks.
* The merchants receive the funds in their wallets.

\
