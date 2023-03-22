---
sidebar_position: 4
---

## What is Consensus Mechanism?

Blockchain consensus refers to the process by which blockchain network nodes agree on the ledger's current state. In a blockchain network, every node has a copy of the ledger, and the nodes must validate any changes before they can be added to the chain.

Ultimately, the goal of any consensus algorithm is to ensure that the ledger is updated in a secure and trustworthy way without the need for a centralized authority to oversee the process.

In a PoS consensus algorithm, nodes in the network are chosen to validate transactions based on the amount of cryptocurrency they hold rather than their computing power. The selected nodes validate the transaction, add it to the chain, and are rewarded with transaction fees and block rewards. PoS is used in networks such as Ethereum.

## Fuse Consensus

Fuse Network uses a unique delegated Proof of Stake (DPoS) consensus model, adding the delegators notion. Delegators are Fuse token holders who wish to participate in the consensus process without running a node. Instead of running their own node because of the minimal stake or the lack of technical knowledge.

Delegators are delegating their staked Fuse tokens to the selected validator, thus increasing its weight in the network Validators and delegators receive block rewards as an incentive. The rewards size is proportional to their stake.

There's on-chain governance in which validators can vote on the core network contracts that affect processes such as staking mechanics, validators set selection, block rewards logic, and governance.

## Governance

Read more in the [Governance section](https://app.gitbook.com/o/-LdmeTBjede0-BcSd0W0/s/goUiB6chXvy8iVhpHHNd/understanding-fuse/fuse-today/fuse-governance-and-development)

## Delegation

Read more in the [Delegation section](https://app.gitbook.com/o/-LdmeTBjede0-BcSd0W0/s/goUiB6chXvy8iVhpHHNd/interacting-with-fuse/delegated-staking)

## Staking Requirments

To participate in securing the network and join the validators set, the node operator must stake a minimum required amount of 100,000 Fuse. Becoming a validator on Fuse is permissionless, meaning that a node operator needs to satisfy specific technical requirements. The maximum staking amount per node is 5,000,000 Fuse.

The need to stake Fuse ensures that an entity cannot create multiple seemingly distinct validators without incurring a high cost. Hence, Sybil protection. Currently, the maximum number of validators on Fuse Network is 100.

The validator who publishes a block agreed upon during a consensus round is rewarded by the network protocol in newly minted FUSE tokens. They also receive the fees users pay for the transactions included in the block.

Over time, validators can expect to publish a share of blocks equal to their overall stake. Since FUSE uses dPoS, a validator can increase their share by attracting FUSE tokens from delegators. The mechanics of delegation on FUSE are discussed in more detail on the [following page](https://docs.fuse.io/aboutFuse/about-fuse/fuse-network-blockchain/validators-and-delegation).

## Misbehaving and malfunctioning

Validators can be expected to be jailed for violating the consensus rules, such as producing bad blocks or not publishing blocks at all. Jailed nodes cannot produce blocks and thus don't receive block rewards, and at the same time, cannot withdraw Fuse for several days. This provides a strong incentive for validators to behave in the desired manner.

### The AuRa Consensus Model

Fuse Network Consensus Algorithm is based on AuRa (Authority Round) consensus mechanism, developed by the OpenEthereum team (previously by parity). AuRa allows integrating on-chain validator set selection and block rewards logic with smart contracts.

Building our unique smart contracts for Consensus and block rewards and making them upgradable via the proxy contracts the Fuse Consensus was created. Check out the repo for more info.

The chosen validator set takes turns in a round-robin fashion to sign and confirm blocks. A signed block is broadcasted and propagated to all network participants. Every node participant verifies the block and appends it to his state, thus confirming the block.

New blocks are produced every 5 seconds, in which a validator has a time window to publish his block and receive a reward for his actions.

Although, in theory, achieving transaction finality in this model may take some time, for practical purposes, a transaction on Fuse Network can be considered finalized after a single block confirmation.
