---
sidebar_position: 3
---

Hardhat is a development environment for building, deploying, testing, and debugging smart contracts.

You may learn more about installing and using Hardhat by reading the official documentation.

## Config Hardhat for Fuse Mainnet

```ts title="hardhat.config.ts"
// Update the default network to be fuse network
const defaultNetwork = "fuse";
```

```ts
// Update the RPC endpoints for Fuse Mainnet
const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    gnosis: {
      url: "https://rpc.fuse.io/",
      gasPrice: 10000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
    chiado: {
      url: "https://rpc.fusespark.io",
      gasPrice: 10000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
  },
};
```

```ts
// Update the TNetworkInfo to be Fuse Network
export const targetNetworkInfo: TNetworkInfo = NETWORKS.fuse;
```

## Compile Your Smart Contract using Hardhat for Fuse Mainnet

```sh
npx hardhat compile
```

## Deploy Your Smart Contract using Hardhat for Fuse Mainnet

```sh
hardhat run --network gnosis scripts/deploy.js
```

You can view your deployed smart contract transaction at Fuse explorers.

Fuse Mainnet Explorer is at https://explorer.fuse.io/

Fuse Testnet Spark is at https://explorer.fusespark.io/
