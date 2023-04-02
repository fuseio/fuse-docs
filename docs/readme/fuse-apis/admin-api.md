# Admin API

Admin API lets you build applications on Web3 that feel like traditional Web2 applications without any friction related to Web3 to the users. It is exactly like integrating Stripe or Plaid into your app, but everything behind the scenes is happening on the Fuse blockchain instead of the traditional legacy payment infrastructures.&#x20;

For this reason, unlike traditional payment platforms, Fuse is borderless, extremely low-cost, and open to everyone.

Fuse Admin API has the following two high-level API sets, which create a capability to build endless use cases for your apps.

#### Admin Wallet API

With the Admin Wallet API, you can create and manage your users' wallets on the Fuse blockchain. Each wallet created through this API is a Smart Contract wallet deployed on the Fuse blockchain, and your project's backend account owns and manages it. To see how it works, check out the [API Reference](https://api-docs.fuse.io/v1.15/reference/post\_admin-wallets-create).

#### Admin Tokens API

With the Admin Tokens API, you can create and manage ERC20 tokens on the Fuse blockchain. Each token created through this API is a mintable/burnable ERC20 token deployed on the Fuse blockchain, and your project's backend account owns and manages it. To see how it works, check out the [API reference](https://api-docs.fuse.io/v1.15/reference/admin-api-tokens) ).

#### How does it work?

You might be wondering how Admin API works and how it is secure. That's a great question and a very important one!

When you create a project on the Fuse dashboard and a Secret API Key associated with it, a backend account on the Fuse blockchain is automatically created. This account's address also appears to you on your project's details page.&#x20;

The private key to this account is encrypted and stored in a secure secrets manager. Since we do not store your secret key, only you can access your backend account.

Once you have a secured backend account, all the transactions through the Admin API are relayed to this account to be handled, including signing and paying the transaction fees!

#### Before Getting Started

Before working with Admin API, if you haven't done so, please follow the guide [Getting Started](../fuse-sdk/getting-started.md).

> #### 📘For all the Admin APIs you will need to have both your Public and Secret API Keys.

#### Ready to start!

Once you have your project set and access your Public and Secret API keys, you can start working with the Admin API.

> #### 📘Remember
>
> For all Admin API requests, you will need to add your Public API Key to the request query params under the key `apiKey` and your Secret API Key in the request headers under the key `API-SECRET`.

> #### 🚧Attention!
>
> You should **always** use Admin API only on your server-side applications and not expose your Secret API Key in your client-side applications.

The main thing you need to know when you work with the Admin API is that all requests are handled asynchronously, meaning that when you send a request, you will receive a reference job object with which you can track the status of the task. In each job object, you will see the `id` of the created job, and to track its status, you can use the [Jobs API](https://api-docs.fuse.io/v1.15/reference/jobs).

When a job's status is `succeeded`, which means that the relevant transaction was successfully processed and included in a block on the blockchain. For a successful job, you will also see the `txHash` value, which you can always go and check on [Fuse Explorer](https://explorer.fuse.io/).
