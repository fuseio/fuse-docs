# Using Hardhat

Hardhat is a development environment for building, deploying, testing, and debugging smart contracts.

You may learn more about installing and using Hardhat by reading [the official documentation](https://hardhat.org/hardhat-runner/docs/getting-started#installation).

### Config Hardhat for Fuse Mainnet <a href="#config-hardhat-for-gnosis" id="config-hardhat-for-gnosis"></a>

{% code title="/packages/hardhat-ts/hardhat.config.ts" overflow="wrap" %}
```typescript
// Update the default network to be fuse network 
const defaultNetwork = 'fuse';
```
{% endcode %}

{% code title="hardhat.config.js" overflow="wrap" %}
```typoscript
// Update the RPC endpoints for Fuse Mainnet
    const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    gnosis: {
      url: 'https://rpc.fuse.io/',
      gasPrice: 10000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
    chiado: {
      url: 'https://rpc.fusespark.io',
      gasPrice: 10000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
  },
};
```
{% endcode %}

{% code title="hardhat.config.js" overflow="wrap" %}
```typescript
// Update the TNetworkInfo to be Fuse Network
export const targetNetworkInfo: TNetworkInfo = NETWORKS.fuse;
```
{% endcode %}

### Compile Your Smart Contract using Hardhat for Fuse Mainnet <a href="#config-hardhat-for-gnosis" id="config-hardhat-for-gnosis"></a>

```shell
npx hardhat compile
```

### Deploy Your Smart Contract using Hardhat for Fuse Mainnet <a href="#config-hardhat-for-gnosis" id="config-hardhat-for-gnosis"></a>

```shell
hardhat run --network gnosis scripts/deploy.js
```

You can view your deployed smart contract transaction at Fuse explorers.

Fuse Mainnet Explorer is at [https://explorer.fuse.io/](https://explorer.fuse.io/)

Fuse Testnet Spark is at [https://explorer.fusespark.io/](https://explorer.fusespark.io/)
