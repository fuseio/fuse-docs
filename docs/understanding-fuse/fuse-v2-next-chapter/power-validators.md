# Power Validators

## What are Power Validators?

The role of Power Validators on the Fuse platform is critical in achieving the desired level of decentralization that makes sense for businesses. They are responsible for powering the payment infrastructure of the Fuse platform while also actively validating transactions.&#x20;

Introducing Power Validators is part of our strategy to further decentralize the business processes by running an additional trustless middleware on top of existing validator roles as part of the Fuse network.&#x20;

Power validators are a big part of the payment flow and will be incentivized by charging a small percentage of the payment for the services provided.

<figure><img src="../../.gitbook/assets/Frame 8.jpg" alt=""><figcaption></figcaption></figure>

## Why are they needed?

Blockchain applications and wallets depend on various middleware services external to the on-chain logic. In the Fuse Stack, those services include relayers, account management, wallet APIs, verification, and more.&#x20;

While Validators are essential for transaction approval, we found that the payment flow we want to provide ([link to docs](https://app.gitbook.com/o/-LdmeTBjede0-BcSd0W0/s/goUiB6chXvy8iVhpHHNd/\~/changes/128/understanding-fuse/fuse-v2-next-chapter/payment-flow)) is much more complex. The payment flow requires an elaborated infrastructure of smart contracts and backend services, and it will have the following additional requirements:

* SCW and account abstraction - The network must deploy smart contract wallets for every user. All users will require a complex transaction flow, and account abstraction helps to automate the process. PVs allow scaling.
* High throughput and fault tolerance - PWs will enable better scalability for the network. There are some advantages to having a centralized solution sometimes. Still, for generating a healthy network for business adoption, we can’t imagine how much essential infrastructure could have critical points of failure. Hence, the new PW utility comes to mitigate this. We plan to achieve high throughput via Rollups. At the same time, the power validators will run sequencer nodes that commit the transactions in batches to L1—more on this in the Privacy/Scalability section.
* Privacy - some transactions need to be private to generate any meaningful adoption. The network needs to be able to process private transactions using the same infrastructure.
* Auxiliary services - Inc, wallet APIs, indexing and notification services, payment link generators, etc.

## Service Quality Verification

The objective is to create a fault-tolerant system enabling high-quality service and a failover architecture. An algorithm to rate and verify the service quality per service needs to be defined. This algorithm can be used for Power Validators' reputation.&#x20;

We need to consider that evaluating one service is more complex than the other. For example, evaluating QoS for the relayer service is more accessible as it is based on on-chain data. On the other hand, the QoS of an API service has multiple parameters, such as response time failure rate.

## Potential Effect on FUSE Tokenomics&#x20;

Becoming a Power Validator on the Fuse network will require more staked FUSE tokens due to the additional services they provide beyond block validation. These services involve critical business operations, which increase the stakes and risks for the operators of the Power Validators.&#x20;

While the final staking amount and further information on the staking mechanism for Power Validators will be proposed in a subsequent FIP, we expect these additional requirements will significantly impact FUSE tokenomics.

## The Path to Power Validators

Our plan to achieve the vision of Power Validators consists of two main phases:

### **Phase 1**

The Relay service is the inaugural service available for Power Validators to operate, and it has been instrumental in the growth of businesses on the Fuse network.&#x20;

This service facilitated gasless transactions for over 180,000 unique users and has been the backbone of this growth. Permitting Power Validators to operate the Relay service will significantly enhance its robustness and decentralization, ultimately promoting the thriving of the Fuse ecosystem. In addition, Power Validators performing the Relay service will receive rewards through operators' fees.

### **Fee structure**

The reward for payments should not be exclusively tied to gas fees but also to transaction volume. Therefore, in the forthcoming FIP, we will explore the possibility of a split payment mechanism for specific transactions that would enable sharing a proportion of the transaction volume with Power Validators' Relay services.

### **Quality of Services (QoS)**

Two main factors will define QoS in the context of Relay services of Power Validators:

* Availability: Overall service uptime&#x20;
* Performance: The duration between when the transaction was sent for relaying and confirmed by the network.&#x20;

We will discuss these factors in more detail in the upcoming FIP.

### **Phase 2 and onwards**

In Phase 2 and beyond, we aim to decentralize most of the functionality of the Fuse Stack that does not require centralized middleware. The Power Validators service will include the following services:

**User Identity** - Upon user verification, the user will receive a DID as a Soul Bound Token (SBT), utilized to identify them on-chain. Metadata and verifiable credentials can be associated with their DID.

**Indexing** - Indexing the Fuse Network and providing a user-friendly API for querying assets and wallets.

**Oracles** - Running oracle nodes to provide price and other data feeds necessary for payment applications.

**Bridges** - Implementation and operation of bridges between the Fuse network and other blockchain networks. The inclusion of bridges as part of the Power Validators service will further decentralize the Fuse network and promote its integration with different blockchain ecosystems.
