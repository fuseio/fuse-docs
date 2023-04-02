---
description: When your validator is jailed, follow these instructions
---

# How to Unjail Your Validator Node

## **Prerequisites**

* Make sure your validator node is back to online
* Make sure your validator node is fully synced

## **Instructions**

1. Send an unjail request&#x20;
2. Send a 0 FUSE transaction to the consensus contract **0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79** from your validator wallet with the following data: **0x6eae5b11**
3. This will move the node to the pending list and it will be released at the start of the next cycle

