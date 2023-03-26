# Fuse Payment Infrastructure

As mentioned in the Vision sub-section, the Fuse platform primarily focuses on the Web3 payments vertical.&#x20;

However, the evidence so far suggests that the mere existence of blockchains powering peer-to-peer transactions is insufficient to ensure the broad adoption of Web3 payments.&#x20;

The Fuse team has, thus, been developing and iterating on a multi-faceted infrastructure that would enable businesses to integrate Web3 payments into their products seamlessly.&#x20;

## The infrastructure comprises the following main components:

1\) Forkable and customizable Fuse Wallet frontend platform and its SDK.

2\) the Charge API-based platform.

3\) Smart contracts on Fuse Network that power smart wallet accounts, tokens, fee abstraction, and other components used by (1) and (2).

4\) The official Fuse RPC endpoint and its supporting nodes.&#x20;

5\) the relevant subgraphs powered by The Graph protocol.

6\) the [Fuse Explorer](https://explorer.fuse.io)

It should be noted that some of the components of this stack are not only utilized as a part of the payment-centric infrastructure but are also open to and help other applications to be deployed and run on the Fuse Network blockchain.&#x20;

If you are a developer or a business wishing to research or implement web3 payments, Fuse's current infrastructure stack is described in more technical detail in the [Fuse Stack](../../developers/fuse-sdk/architecture.md) section.

In the subsequent parts of this section, we will briefly discuss the fundamental principles on which the workings of the Fuse payment-focused infrastructure are based.  &#x20;

## Mainstream Mobile Experiences&#x20;

Self-custody on mobile devices using biometrics is a powerful solution to the private key management challenge for everyday, mainstream users. In addition, this method is a more user-friendly and accessible alternative to current hardware crypto wallets.&#x20;

Moreover, It can increase the adoption of this technology among non-technical users.

Part of Fuse’s mission in this field is to develop and improve this method of private key management to make it more secure and convenient for users.

Increased mobile penetration worldwide and the continued development of self-custody wallet technology will significantly increase our ability to drive mainstream adoption of Web3 payments.&#x20;

In addition, as more people have access to smartphones and mobile internet, securely managing private keys through these devices becomes a more viable option for a broader range of users.

The critical pillar in Fuse's mobile-first strategy is Fuse Wallet, an open-source, cross-platform modular mobile front-end for web3 payments and related use cases built on the Flutter software. Fuse Wallet is designed to be modular, flexible, and easy to use, allowing developers to create custom integrations that suit their specific needs.

The main goal of Fuse Wallet is to provide embedded wallets as a service, which allows smart contract wallets of Fuse to be integrated into any application. This eliminates the need for users to leave the applications to make payments, reducing another layer of complexity for users.

In addition to the current support for Flutter, Fuse is working on expanding the availability of Fuse Wallet to other popular languages and frameworks. This includes Typescript, React, Vue, and other widely-used programming languages and frameworks.&#x20;

By broadening the range of programming languages and frameworks that Fuse Wallets can develop, Fuse aims to make it easier for developers to integrate web3 payments into their existing applications and workflows, thereby expanding the reach and adoption of web3 payments.
