# Trade API

Trade API lets you integrate trading functionality into your application. With the Trade API, users can buy and sell popular cryptocurrencies like Bitcoin and Ethereum, stablecoins, or custom tokens dedicated to their application domain. Behind the scenes, it uses [voltage.finance](https://voltage.finance/) decentralized exchange.

Fuse Trade API has the following high-level API sets, which create the capabilities to build endless use cases for your apps.

### Prices

Allows the developer to fetch prices and the historic prices of various assets. This can show a chart's current token price or price history.

### Price Changes

Allows the developer to fetch the change in the price of the asset. This can show how much the token price has changed over a defined interval.

### Swap

Swap is an auxiliary API that helps you perform transactions if you cannot use the [voltage-sdk](https://github.com/voltfinance/voltage-sdk). The voltage SDK is written in JS and is hard to use in a mobile environment. Instead, you can send a request to the Swap API, which will generate the trade data. Then the user needs to sign and relay the data.

## Working with Trade API

Before working with Trade API, if you haven't done so, please follow the guide [Getting Started](../fuse-sdk/getting-started.md).

#### Ready to start!

> #### 📘Remember
>
> For all Trade API requests, you will need to add your Public API Key to the request query params under the key `apiKey`.

Once you have your project set and access to your Public API key, you can start working with the Trade API. Check out the [Trade API Reference](https://api-docs.fuse.io/v1.15/reference/price) for usage.
