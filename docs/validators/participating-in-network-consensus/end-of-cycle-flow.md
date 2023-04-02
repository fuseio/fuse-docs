---
description: >-
  This describes the End-of-Cycle flow that completes the Cycle, handles
  rewards, and enforces the consensus.
---

# End-of-Cycle Flow

1. BlockReward.reward is called every block, and when the cycle ends calls the Consensus.cycle
2. Consensus.cycle is responsible for several functions:
   1. Sets the boolean Consensus.ShouldEmitInitiateChange to true
   2. Calls BlockReward.onCycleEnd, which sets the boolean BlockReward.shouldEmitRewardedOnCycle to true as well
3. The fuse-validator-app (fuseapp container on validator vms) checks the value of the above two booleans and, when true calls the following two functions (two separate transactions):
   1. Consensus.emitInitiateChange
   2. BlockReward.emitRewardedOnCycle

Note that only one validator can make this call successfully, so the 1st one succeeds, and all others fail. But it’s ok because those are 0-gas transactions. So actually, the validator who is the next one to validate a block is the one who successfully makes those calls.

1. The above calls emit the following events:
   1. Consensus.InitiateChange
   2. BlockReward.RewardedOnCycle
2. The bridge oracles fuseoracle-initiate-change and fuseoracle-rewarded-on-cycle are responsible for listening to the above events.
3. Those oracles should run on all validators and call submitSignature on the HomeBridgeNativeToErc contract in the Fuse network - each validator should submit the signature for each oracle (events).
4. Once enough validators have submitted their signatures (most current validators), the home bridge emits an event called CollectedSignatures (again, one event for each of the previous events in section 4).
5. The bridge oracle fuseoracle-collected-sigantures is responsible for listening to the CollectedSignature events, and all validators should get it. The validator responsible for transmitting the transaction to the mainnet is the last one to submit the signature in section 7, and its address is part of the event details. Hence, other validator oracles “know” it’s not their turn and skip the event. If a validator is down or out of money or infura is dead - the next one in line (in the ValidatorSet) is responsible for transmitting to the mainnet.
6. Eventually, on the mainnet, we are supposed to see two transactions to the ForeignBridgeNativeToErc each cycle - one updating the new validators and one minting the fuse tokens created during this cycle on Fuse.

Note that if the new validator sets transactions to fail on the mainnet, there’s a chance the minting will fail as well because before transmitting, it checks if all signatures are valid.&#x20;

There can be a situation where new validators were added on a cycle and were fast enough to submit their signatures on fuse end-of-cycle transactions but weren’t updated on mainnet due to failure of the 1st transactions so that the 2nd one will contain “invalid” signatures from the mainnet perspective.



Example of a successful flow (from 7/6/2020)

1. Consensus.emitInitiateChange transaction on fuse - [https://explorer.fuse.io/tx/0xfc44d6ded7521fe00de3167b4845adc0df91df2021680cc3dea588179b14bdc4](https://explorer.fuse.io/tx/0xfc44d6ded7521fe00de3167b4845adc0df91df2021680cc3dea588179b14bdc4)
2. BlockReward.emitRewardedOnCycle transaction on fuse - [https://explorer.fuse.io/tx/0x76ae7870209c878c1eb120ecde9704902d5c823d67df3ecd55e340aab89e97fe](https://explorer.fuse.io/tx/0x76ae7870209c878c1eb120ecde9704902d5c823d67df3ecd55e340aab89e97fe)
3. Successful validators update transactions on mainnet - [https://etherscan.io/tx/0xf43b2abebd64537dbd7d834c9ac7a42ce8a925da5cb5278002ce0687187c8882](https://etherscan.io/tx/0xf43b2abebd64537dbd7d834c9ac7a42ce8a925da5cb5278002ce0687187c8882)
4. Successful fuse minting transaction on mainnet - [https://etherscan.io/tx/0x2bd70ecbff6e84c18306701eb380e558a7340fab61aadf1af7690021aeeef5ce](https://etherscan.io/tx/0x2bd70ecbff6e84c18306701eb380e558a7340fab61aadf1af7690021aeeef5ce)

