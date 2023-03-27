# Smart Contracts

## **Architecture**

The Fuse Smart Wallets are based on the smart contract wallets architecture used in Argent's smart contract wallets. For more information on Argent's smart contract wallet architecture, you can refer to their [specifications](https://github.com/argentlabs/argent-contracts/blob/develop/specifications/specifications.pdf).

The smart contracts used in the Fuse Smart Wallets are deployed on the Spark testnet and the Fuse mainnet. The Spark testnet is used for testing and development purposes, while the Fuse mainnet is used for production use of the Fuse network.

## Deployed Contracts

The following smart contracts are deployed on the Spark testnet:

| Contract Name          | Contract Address                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| WALLET\_FACTORY        | [0x2ab4A64e246010e96C5387Ec4C7B1256B9783ce3](https://explorer.fusespark.io/address/0x2ab4A64e246010e96C5387Ec4C7B1256B9783ce3) |
| WALLET\_IMPLEMENTATION | [0x7109623c967D70c48c835ed2e4E3CdFd27fa8003](https://explorer.fusespark.io/address/0x7109623c967D70c48c835ed2e4E3CdFd27fa8003) |
| MULTI\_SIG\_WALLET     | [0xc591e1194056166812049743DaAa714159e6c3C8](https://explorer.fusespark.io/address/0xc591e1194056166812049743DaAa714159e6c3C8) |
| GUARDIAN\_MANAGER      | [0xC1254443B6b9E5b5714D57ae3Af16FE9D220775D](https://explorer.fusespark.io/address/0xC1254443B6b9E5b5714D57ae3Af16FE9D220775D) |
| LOCK\_MANAGER          | [0x370672167439e399cE753963E31E26EEB5bfaf6c](https://explorer.fusespark.io/address/0x370672167439e399cE753963E31E26EEB5bfaf6c) |
| RECOVERY\_MANAGER      | [0xA85aA96857cBdEb5C7e88a59772E6E7170986f02](https://explorer.fusespark.io/address/0xA85aA96857cBdEb5C7e88a59772E6E7170986f02) |
| APPROVED\_TRANSFER     | [0x959f0fF280EAF7BB1b57ec75AC777aB863f82736](https://explorer.fusespark.io/address/0x959f0fF280EAF7BB1b57ec75AC777aB863f82736) |
| TRANSFER\_MANAGER      | [0xF66e26Fd99F4687CC29148BE2e331df2e49E249E](https://explorer.fusespark.io/address/0xF66e26Fd99F4687CC29148BE2e331df2e49E249E) |
| NFT\_TRANSFER          | [0xe713Ec7D3516d65966c5DeA3CF78EFE1DcaDd47B](https://explorer.fusespark.io/address/0xe713Ec7D3516d65966c5DeA3CF78EFE1DcaDd47B) |
| TOKEN\_EXCHANGER       | [0xd636460D8866430EbDeDb5A3AE4f19D0735fD1B7](https://explorer.fusespark.io/address/0xd636460D8866430EbDeDb5A3AE4f19D0735fD1B7) |
| COMMUNITY\_MANAGER     | [0x9585db67ab966Ec8dfDdc47bAD9cE46905A5a0e1](https://explorer.fusespark.io/address/0x9585db67ab966Ec8dfDdc47bAD9cE46905A5a0e1) |
| WalletOwnershipManager | [0xfE0B31C96FE5929849D8D48C56c428d935dDfE00](https://explorer.fusespark.io/address/0xfE0B31C96FE5929849D8D48C56c428d935dDfE00) |

The following smart contracts are deployed on the Fuse mainnet:

| Contract               | Address                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| WALLET\_FACTORY        | [0x2FE1F9bBC9CE8Ea4E00F89FC1a8936DE6934b63D](https://explorer.fuse.io/address/0x2FE1F9bBC9CE8Ea4E00F89FC1a8936DE6934b63D) |
| WALLET\_IMPLEMENTATION | [0x811A7F70d12fbd29Ec494eDc75645E66f5fCcCFc](https://explorer.fuse.io/address/0x811A7F70d12fbd29Ec494eDc75645E66f5fCcCFc) |
| MULTI\_SIG\_WALLET     | [0xec73bA3070EA2267ca6d4dEF4173DCA0a004B4fc](https://explorer.fuse.io/address/0xec73bA3070EA2267ca6d4dEF4173DCA0a004B4fc) |
| GUARDIAN\_MANAGER      | [0x1D91b84b22AC32B7928Dc6BdB2A66C42Fc32F1C3](https://explorer.fuse.io/address/0x1D91b84b22AC32B7928Dc6BdB2A66C42Fc32F1C3) |
| LOCK\_MANAGER          | [0x8221d124f8255f61fC5f1dbb2382364B53355574](https://explorer.fuse.io/address/0x8221d124f8255f61fC5f1dbb2382364B53355574) |
| RECOVERY\_MANAGER      | [0xcB4606396746Cd62Ac9ea9Cc0fCc5B16BE73E7aF](https://explorer.fuse.io/address/0xcB4606396746Cd62Ac9ea9Cc0fCc5B16BE73E7aF) |
| APPROVED\_TRANSFER     | [0x2cbE5fE3d259313F25Ac2Dd10FAB8B851561F366](https://explorer.fuse.io/address/0x2cbE5fE3d259313F25Ac2Dd10FAB8B851561F366) |
| TRANSFER\_MANAGER      | [0x2B3113B752645dfAFCe690706b5eCAd9d83977CF](https://explorer.fuse.io/address/0x2B3113B752645dfAFCe690706b5eCAd9d83977CF) |
| NFT\_TRANSFER          | [0x856283dD385f53FEAd47aA981517eEa564379cFC](https://explorer.fuse.io/address/0x856283dD385f53FEAd47aA981517eEa564379cFC) |
| TOKEN\_EXCHANGER       | [0xaA556969CB2782052A2eADEA32e660d40f4C4281](https://explorer.fuse.io/address/0xaA556969CB2782052A2eADEA32e660d40f4C4281) |
| COMMUNITY\_MANAGER     | [0x0D4926876ba1ada6E9b542e018eBeD517FFc8050](https://explorer.fuse.io/address/0x0D4926876ba1ada6E9b542e018eBeD517FFc8050) |
| WalletOwnershipManager | [0x0134652f44006eE54f1E86d6a5786a28b9dCcD0b](https://explorer.fuse.io/address/0x0134652f44006eE54f1E86d6a5786a28b9dCcD0b) |
