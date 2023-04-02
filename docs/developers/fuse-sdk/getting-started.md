# Getting Started

## Creating a Developer Account and Project

To use the Fuse Wallet SDK, you need to create a project in Fuse Developers Dashboard by following the below steps.

### 1. Create a Fuse Developer Account

Signup or log in to [https://developers.fuse.io](https://dashboard.fuse.io).

### 2. Create Your First Project

Once you created your account successfully, you will be taken to your Projects page. Click the "Create a new project" button for your first project.

### 3. Name Your Project and Give a Description

Name the project, give it a description (the name and description are only visible to you, so feel free to write anything), and click Done.

### 4. Project Details and API Keys

Once you have created your project, you will see it in the list of your projects. Go on and enter the project details to get your API keys.

> 📘 Public API Key
>
> Here you will see that your **Public API Key** is already generated for you and you can always come to this page to check it out. You will need your Public API Key in all the API requests placed in the query parameters under the key `apiKey`.

### 5. Try Making a Request

At this stage, you can already start using 💰 Fuse Wallet SDK and [Trade API](../fuse-apis/trade-api.md) with your public key.

For example, let's try to get the Fuse token price with [Price API](https://api-docs.fuse.io/v1.15/reference/get\_trade-price-tokenaddress), where you can enter `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE` to the `tokenAddress` field and your public API key to the `apiKey` field and hit the `Try It!` the button below the code snippet.

Or you can try this cURL command by inserting your public API key instead of `yourPublicKey`:

```curl
curl --request GET \
     --url 'https://api.fuse.io/api/v0/trade/price/0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE?apiKey=<yourPublicKey>' \
     --header 'Accept: application/json'
```

The response should look like this:

```json
{
  "data": {
    "price": "0.12206779487998277"
  }
}
```

### 6. Generate Your Secret API Key

If your use case is a better fit for the Custodial mode, follow the next steps to generate your Secret API Key. Otherwise, you can continue to the API Reference section to learn how to use the API for your application.

> 📘 Secret API Key
>
> In addition to the Public API Key, you will also need your **Secret API Key** for the **Admin API**. The Secret Key adds an additional layer of security for the Custodial use cases as in this case, you will be in charge of the security of your users. But about the security we also get you covered, all you need to do is to securely keep your Secret API Key and we take care of the rest!

To generate your Secret API Key, click "Generate a new API secret key" on the project's detail page. Once you click it, a popup will appear with your Secret API Key.

> 🚧 Make sure to keep your Secret API Key secured
>
> Your Secret API Key will appear only once, so make sure to save it somewhere secure!\
> If you lose your Secret Key, you will not be able to recover it, but you can always roll it and get a new one, which will expire the old one the moment you roll your key.\
> To learn how t roll your secret key, check out the "Rolling your Secret API Key" section.

### 7. Funding Your Backend Account

Congratulations, you have created your first Secret API Key and are almost ready to use the Admin API for your project.

The last step before we are done is to fund your backend account so that you can cover the transaction fees on behalf of your users. But worry not; the transaction fees on Fuse are so cheap that funding your account only with 1 Fuse will be enough for a long time!🤩

> ❗️ Sending Fuse to your project's backend account is irreversible
>
> Please note that currently once you send Fuse to your backend account, you cannot withdraw your funds from there, so we suggest to start with a small amount like 0.1 Fuse and only if needed you can always send more funds to your project's backend account.

To fund your backend account, click the "Fund" button on the Project Details Page. You will see your backend account's address which you can copy or read the QR code in a mobile wallet like Fuse Cash (suggested) or Metamask.

You can always track your project's account balance at [https://explorer.fuse.io](https://explorer.fuse.io). Just enter your account's address in the search bar, and you will see the Fuse balance of your account.

> 🚧 Make Sure to Fund Your Account On Fuse Network!
>
> Make sure that you send Fuse tokens on Fuse network! If you need guidance on how to do that, follow the link on the pop-up to learn more.

### 8. Rolling Your Secret API Key

If you ever lose your Secret API Key or fear it is compromised, you can always roll it to get a new one that will revoke your existing key.

To roll your Secret API Key, go to the Project Details Page and click on the "Roll API secret key" button, and on the pop-up that appears, click on the red "Roll" button.

Once you roll your Secret API Key, the new key will appear in the pop-up window. Again, make sure to securely save this key and replace the old one with the new one in all the apps that use the secret key.
