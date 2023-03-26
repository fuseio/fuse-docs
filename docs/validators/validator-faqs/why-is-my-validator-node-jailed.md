---
description: Everything you need to know about jailing and strike counts.
---

# Why is my validator node jailed

## **Summary**

* As part of the [FIP11](https://github.com/fuseio/FIPs/blob/master/FIPS/fip-11.md), jailing was introduced when a validator node misbehaved and became offline.&#x20;
* When a validator node is down and not actively participating in the consensus process, it negatively affects the block processing timing and network throughput.
* [FIP11](https://github.com/fuseio/FIPs/blob/master/FIPS/fip-11.md) introduced the auto-removal of an offline validator node from the pending validator list and added a jailing period depending on the node's offline cycles.&#x20;
* At cycle's end, the consensus checks to see if a validator has validated at least 70% of their projected number of blocks; if they haven't, they're removed from the list of pending validators, moved to the list of jailed Validators, and given a strike.
* To calculate the total jail time, add `(endOfTheNewCycle + (numberOfBlocksPerCycle * strike count)).`
* To prevent operators from failing to keep up with node operation, a strike system was implemented for those who repeatedly break the rule.
  * 1st strike - 1 cycle min jail time&#x20;
  * 2nd strike - 2 cycle min jail time&#x20;
  * 3rd strike - 3 cycle min jail time&#x20;
  * 4th strike - 4 cycle min jail time&#x20;
  * 5th (max) strike - 5 cycle min jail time
* Strikes get reset after 50 cycles of not being jailed.
* When you are in jail, your validator node will not be visible in the UI but will still be included in the list of old validators.
* A node's jail time is primarily to maintain network stability rather than as a form of punishment. While in jail, a user's ability to run nodes will be taken away, but they will still be able to receive rewards. Although restaking a large portion of one's fuse to another node after being jailed may result in losing delegators and voting rights, it will allow the node to continue collecting rewards (minus a 15% fee).
* For full details about the strike system and jail time period, look at the [FIP11](https://github.com/fuseio/FIPs/blob/master/FIPS/fip-11.md).

## **Node Maintenance**

* As part of FIP11, a new function named `maintenance()` was introduced; it temporarily jails a validator without increasing the strike count while moving it from the pending list to the jailed list for one cycle. That way, Validators can do maintenance without fear of sanctions or adverse effects on the network.

## How to free your validator node

You can refer to the [document](how-to-unjail-your-validator-node.md) to [unjail](how-to-unjail-your-validator-node.md) your validator node.



{% embed url="https://github.com/fuseio/FIPs/blob/master/FIPS/fip-11.md" %}
