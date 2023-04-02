# Smart Wallets API

Smart Wallets API provides a Wallets as a Service (WaaS) API for your cross-platform applications. As a developer, you can access the Smart Wallets API via the [fuse-sdk](../fuse-sdk/ "mention") or refer to the [Smart Wallets API reference](https://api-docs.fuse.io/reference/post\_api-v1-smart-wallets-auth) directly.&#x20;

Smart Wallets API lets you authenticate users with their Externally Owned Accounts (EOAs) and create Smart Contract wallets, execute gasless transactions through the relay service, fetch balances and tokens, get transaction history, and much more.

Each wallet created through the Smart Wallets API is an upgradable Smart Contract wallet deployed on the Fuse network. The wallet is non-custodial. Thus it has an owner in charge of the wallet. The owner controls the wallet funds and can perform other transactions by signing messages and sending them to the relayer.

## Working with Smart Wallets API

Before working with Smart Wallets API, if you haven't done so, please follow the guide [Getting Started](../fuse-sdk/getting-started.md).

#### Ready to start!

> #### 📘Remember
>
> For all Smart Wallets API requests, you will need to add your Public API Key to the request query params under the key `apiKey`.

Once you have your project set and access to your Public API key, you can start working with the Smart Wallets API. Check out the [Smart Wallets API Reference](https://api-docs.fuse.io/reference/post\_api-v1-smart-wallets-auth) for usage.
