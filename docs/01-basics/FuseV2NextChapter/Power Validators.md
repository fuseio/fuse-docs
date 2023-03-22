---
sidebar_position: 3
---

As discussed in the preceding subsection, Power Validators are especially incentivized providers of essential middleware services on top of the Fuse Network blockchain.

The role of Power Validators on the Fuse platform is critical in achieving the desired level of decentralization. They are responsible for powering the payment infrastructure of the Fuse platform while also actively validating transactions.

The introduction of Power Validators is part of our strategy to decentralize further the middleware technology that has been developed since the beginning of the Fuse project.

## Trusted Middleware

Previously, all the technology was consolidated under the Charge platform, which was responsible for creating and managing merchant accounts and smart contract wallets, relaying transactions, and covering gas fees for end-users. With the introduction of Power Validators, they will take on these responsibilities and more.

Services Power Validators will provide:

In the current setup, these services are offered mainly by Fuse Labs, although third-party providers can also participate.

- Relayers
- Account management
- Automation
- User Verification
- Storage
- Blockchain indexing

![](<../images/Fuse%20Documentation%20-%20Technical%20Points%20(2).png>)
_Middleware problem_

Power Validators aim to form a reliable and sufficiently decentralized layer that provides those services. At the same time, the Fuse Network provides security and incentivization for those services.

## Why PVs?

The vision of Fuse still and always was to build a decentralized payments infrastructure. Moreover, the reliability and security of a Dapp are equal to its weakest dependency.

Blockchain applications and wallets depend on various middleware services external to the on-chain logic. In the Fuse Stack, those services include relayers, account management, wallet APIs, verification, and more.

Currently, we provide a solution with a hosted service developed and maintained under the umbrella of the Charge platform, already providing a great experience to the developers and end-users.

![](<../images/Fuse%20Documentation%20-%20Technical%20Points%20(1)%20(1).png>)
_Trusted Middleware_

## Becoming a Power Validator

To become a Power Validator, a network validator must “restake” the FUSE tokens that it has staked to ensure its honest behavior as a validator.

## The Restaking Approach and its Logic

This will imply that additional slashing conditions will apply to the relevant network validators' stake depending on the relevant middleware service requirements.

On the flip side, network validators that will choose to take on additional responsibilities will receive an additional income stream, which will help increase capital efficiency for the staked FUSE.

The additional remuneration of Power Validators will come from FUSE tokens deposited by the operators using the relevant services.

In the big picture, the restaking approach to Power Validator incentivization means that the security cover provided by the staked FUSE can be extended to guarantee the quality of additional services whose quality would otherwise only be backstopped by the relevant provider's reputation alone.

Which services will be opened to Power Validators soon will depend on the ease of on-chain verification of their quality as it is an on-chain smart contract tasked with slashing the Power Validators' stake. It will thus have to run a verification process for the service in question.

For this reason, in Fuse 2.0, we have introduced the new concept of **Power Validators**.

**With this in mind, by the end of 2023, we expect that Power Validators will be able to provide the following services**:

## What do they do?

The role of Power Validators on the Fuse platform is critical in achieving the desired level of decentralization. They are responsible for powering the payment infrastructure of the Fuse platform while also actively validating transactions. The introduction of Power Validators is part of our strategy to decentralize further the middleware technology developed since the beginning of the Fuse project.

Previously, all the technology was consolidated under the Charge platform, which was responsible for creating and managing merchant accounts and smart contract wallets, relaying transactions, and covering gas fees for end-users. With the introduction of Power Validators, they will take on these responsibilities and more. This includes performing transaction relaying services and supporting the upcoming fee abstraction protocol.

As we move forward, we will update our documentation and whitepaper with more information about Power Validators and how they will function within the Fuse ecosystem. We believe this will help create a more decentralized and robust infrastructure that will enable seamless transactions and payments across the network.

Under the initial Fuse V2 implementation, only entities that are network validators will be able to become Power Validators.

## Slashing

- Transaction relaying
- Smart Account creation and management
- Payment automation and recurring payments

## Tokenomics:

- New staking req
- Accept a fee for every transaction
- New incentive for PV
- A vote will be needed on Q2
