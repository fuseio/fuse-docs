# Notifications API

## Problem

Notifications don't exist on the blockchain!

* UX and lack of relevant notifications are among the biggest inhibitors to the growth of blockchain apps.
* Getting the information required to notify users about web3 events is complicated and requires considerable dev time and extra infrastructure.
* Developers can’t trigger notifications for important events like receiving tokens in their wallets.

## Solution

Fuse Notifications enables you to send relevant, timely notifications on the most essential Web3 events with the following benefits:

* Starts working with a simple API call, doing all the hard work for you.
* Has built-in notifications for mined transactions for token-type transfers, with more capabilities to be added soon.

## Benefits of Notifications API

### 1. Increase User Engagement

With Fuse Notifications, you will significantly increase user engagement and retention by improving overall UX.

### 2. Easy Integration

No crazy infrastructure or complicated processes. Engage your users in less than 15 minutes. Create a new hook with a simple API call, configure it, then start notifying.

## Features

With Fuse Notifications, you can let users know when transaction activity occurs at their address. No more refreshing the page or watching each new block and creating custom filters to track users’ data. The Address Activity webhooks include notifications for:

* External Transfers
* Internal Transfers
* Token Transfers

Fuse Notifications works by using webhooks, a way to subscribe to events on your application. This guide will walk through what webhooks are and how you can use them to get started with Fuse Notifications.

## Working with Notifications API

### What are Webhooks?

Webhooks allow users to receive notifications when an event occurs on your application. Rather than continuously polling the server to check if the state has changed, webhooks provide information to you as it becomes available, which is more efficient and beneficial for developers. Webhooks work by registering a URL to send notifications to once certain events occur.

Webhooks are typically used to connect two different applications. One application is the "sender" (in our case, Fuse), which listens to events on the blockchain and sends them off to the second "receiver" application (in our case, your dapp), which takes actions based upon that received data.&#x20;

When an event occurs on the blockchain, the sender application sends that data to the webhook URL of the receiver application. The receiver application can then send a callback message with an HTTP status code to let the sender know whether the data was received successfully or not.

You can think of webhook notifications just like SMS notifications. The entity sending the message has your registered phone number, and they send a specific message payload to that phone number. You then can respond, confirming you have received it, creating a two-way communication stream.

### Types of Address Activity Events in Fuse Notifications

With Fuse Notifications, you can subscribe to any or all of the three different types of events:

#### **1. Native FUSE Transfers**

These are top-level transactions that occur with a `fromAddress` being an external (user-created) address. External addresses have private keys and are accessed by user

#### **2. Token Transfers (ERC20, ERC721, ERC1155)**

These are event logs for any ERC20, ERC721, and ERC1155 transfers.

#### **3. Internal Fuse Transfers**

These are transfers that occur where the `fromAddress` is an internal (smart contract) address. (ex: a smart contract calling another smart contract or smart contract calling another external address).

When you create a webhook, you can choose which types of events to listen to by setting the `eventType` field for the webhook with one of these values: `ALL`, `FUSE` (Native), `ERC20`, and `ERC721` (includes `ERC1155`).

### Webhook IP addresses

As an added security measure, you can ensure your webhook notification originates from Fuse by using one of the following IP addresses:

```
3.72.127.173
3.72.200.191
```

### Webhooks Retry Logic

Fuse Notifications has a built-in retry logic for webhooks. Here is some information you need to know on how retry-logic works.

### When are requests retried?

Requests are retried for non-200 response codes, and upon failures to reach the server.

### How often are requests retried?

Requests are retried up to 6 times before failing over. Here are the times after the initial failure that the request is retried, with each time interval building off the previous:

* 15 seconds
* 1 minute
* 10 minutes
* 1 hour
* 1 day
* 1 day

## Example Events

### External Native Fuse Transfers

Note that the value field consists of the decimals of the token. In the below example `1 Fuse` was transferred, and as Native Fuse has 18 decimals, we see the value `100000000000000000`. For convenience, you can also refer to the `valueEth` field, which gives the value formatted without the decimals.

Outgoing

```json
{
  "to": "0x1ea1f375B5dA185eb51edcbED23F3d401f8368cE",
  "from": "0xcc95E80DA76bd41507b99d9b977Dc3062bcf6430",
  "value": "1000000000000000000",
  "valueEth": "0.1",
  "txHash": "0xf801c95b9325e69be8ccf8889f1b3245a5b48e6f783913bd4d41ec4c6ba9720b",
  "blockNumber": 18196049,
  "blockHash": "0x1160be538508f63e3917b61f7af84db8907f66290d568340050f97e16008cc0b",
  "tokenType": "FUSE",
  "tokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "projectId": "62ce87c8131bbffe0f83af65",
  "direction": "outgoing"
}
```

### ERC20 Transfers

Note that the value includes the decimals of the token, which is given in the `tokenDecimals` field. In the example below, the transferred amount is `109.7 G$` as the `tokenDecimals` is 2.

Incoming

```json
{
  "to": "0x1ea1f375B5dA185eb51edcbED23F3d401f8368cE",
  "from": "0x331C1B0cDCE2e9223c707cf07c6515C75Ad95B6b",
  "txHash": "0x9d5156039280cfd5fd828293d0351fda88e6f5078db095c63db164c8af7c4f50",
  "tokenAddress": "0x5Df217D84e67a4aAc9d130fc7AfED5a94e873f0D",
  "blockNumber": 18226326,
  "blockHash": "0x724bfcb22f0dcabed508b0074832e5901de0e4b6ae0ff09b6843dd87a36de2e3",
  "tokenType": "ERC-20",
  "tokenName": "GoodDollar",
  "tokenSymbol": "G$",
  "tokenDecimals": "2",
  "value": "109700",
  "projectId": "62caedf9e2719e72815d0703",
  "direction": "incoming"
}
```

### ERC721 Transfers

Note that in ERC721 and ERC1155 transfers, instead of the `value` field, you will see the `tokenId` field.

Outgoing

```json
{
  "to": "0x1ea1f375B5dA185eb51edcbED23F3d401f8368cE",
  "from": "0xcc95E80DA76bd41507b99d9b977Dc3062bcf6430",
  "txHash": "0x017d84e90bf8106e16f77e1e8991e9c054ce9071396af2faa53df4d5b0cd959c",
  "tokenAddress": "0xb73CC6D7a621E0e220b369C319DBFaC258cEf4D2",
  "blockNumber": 18156272,
  "blockHash": "0x0744f542c64df0fb261c340de92eb8bad90ed6c7e963700d26710fd96e1ad81f",
  "tokenType": "ERC-721",
  "tokenSymbol": "PUNK",
  "tokenName": "FusePunks",
  "tokenId": 341,
  "projectId": "62ce87c8131bbffe0f83af65",
  "direction": "outgoing"
}
```

### Internal Native Fuse Transfers

Note the `isInternalTransaction: true` field in the event that specifies that the transfer is an Internal Transfer.

OutgoingIncoming

```json
{
  "to": "0x1ea1f375B5dA185eb51edcbED23F3d401f8368cE",
  "from": "0xcc95E80DA76bd41507b99d9b977Dc3062bcf6430",
  "value": "1000000000000000000",
  "valueEth": "0.1",
  "txHash": "0x9849ab2b707853e53750b8cebe062bdf3cc37d2d19414f5c86cee8728dc41a8d",
  "blockNumber": 18230883,
  "blockHash": "0x62532c55f6094242051d52218a0677c59169276c7d0bee1f46edc322fc0e25b5",
  "tokenType": "FUSE",
  "tokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "isInternalTransaction": true,
  "projectId": "62caedf9e2719e72815d0703",
  "direction": "outgoing"
}
```

## Testing Out Notifications

The easiest way to test out the notifications is to use a tool like webhook.site, which creates a webhook address for you with which you can create a webhook on Fuse and start listening to events.

After you have a webhook address (either in your app, or in webhook.site or similar), you can easily start listening to the events you wish with the following easy steps.

#### Step 1

Create a webhook with [Create Webhook API](https://api-docs.fuse.io/v1.15/reference/post\_notifications-webhook)

> #### 📘You can find your `projectId` in the URL of your project page
>
> Note that you will need to have an active Fuse account and a project with Public and Secret API keys before getting started. Please refer to [Getting Started](../fuse-sdk/getting-started.md) before the next steps.

#### Step 2

Add addresses to listen to with [Add Webhook Addresses API](https://api-docs.fuse.io/v1.15/reference/post\_notifications-webhook-add-addresses)

> #### 📘
>
> If you don't remember your `webhookId`, you can always fetch all your webhooks with [Get Webhooks for Project](https://api-docs.fuse.io/v1.15/reference/get\_notifications-webhooks-projectid)

#### Step 3

That's it! 😊 Check your webhook URL for events fired for the addresses you added in the webhook.

## Managing Webhooks

You can always edit or delete your webhook, add or remove addresses, and change your URL with the following endpoints:

> #### 📘Webhook Address Types
>
> Addresses that you add to webhooks, can be either wallet or token addresses. In all webhook event objects you will see the `addressType` key with the value `Wallet` for wallet addresses or `Token` for token addresses that you subscribed to.
>
> \
> **Note:** If in any event there is both a wallet address and a token address you subscribed to, you may receive events that may look like duplicates, but you should be able to differentiate between them by looking at the `addressType` field.

* [Delete Webhook](https://api-docs.fuse.io/v1.15/reference/delete\_notifications-webhook)
* [Update Webhook](https://api-docs.fuse.io/v1.15/reference/put\_notifications-webhook)
* [Add Webhook Addresses](https://api-docs.fuse.io/v1.15/reference/post\_notifications-webhook-add-addresses)
* [Delete Webhook Addresses](https://api-docs.fuse.io/v1.15/reference/post\_notifications-webhook-delete-addresses)

You can find all the available endpoints in [Webhooks API Reference](https://api-docs.fuse.io/v1.15/reference/webhooks).

\
