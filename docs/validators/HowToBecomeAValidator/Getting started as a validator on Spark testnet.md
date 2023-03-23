---
sidebar_position: 3
---

## Pre-requirements

To be a Spark validator, you first must see that you meet the pre-requirements:

- You know what it means to be a Spark validator - Becoming a validator.
- You have at least 100K SPARK tokens, or you will have an aggregated delegation of at least 100K SPARK tokens - To apply for SPARK test tokens, fill out this form
- You have an always-on hardware that meets the pre-requisites - How to run network nodes

## How to become a Spark validator

To quickly become a validator, follow these steps:

### Step 1: Download the `quickstart.sh` script and an `.env` example file:

```bash

mkdir fuse-validator
cd fuse-validator
wget -O quickstart.sh https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/quickstart.sh
chmod 777 quickstart.sh
wget -O .env https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/examples/.env.validator.example

```

### Step 2: Update the `.env` file:

```bash

set "sudo" on `PERMISSION_PREFIX` if running docker/docker-compose requires root

add the following line:
TESTNET=true

(optional) set 'VAL_NAME' to display a custom name on health.fusespark.io (cannot contain spaces)
```

### Step 3: Run the script as a validator:

```sh

./quickstart.sh

```

:::tip

After running the script successfully, you will see your address on the health site.

:::

### Step 4: Stake and/or delegate!

#### Stake

To stake SPARK tokens, all you should do is send your SPARK tokens to the Spark Consensus contract address over the Spark Network from the validator address.

:::tip

The Spark Consensus contract address:

0xC8c3a332f9e4CE6bfFFcf967026cB006Db2311c7

:::

The easiest way is to import your private key or key-store file to your favorite wallet (for example, Metamask), switch the network to Spark, and send the SPARK tokens (native testnet tokens) to the Consensus contract address.

:::info

You can find your key-store (containing your private key) and the password for the created account in:
$HOME/fusenet/config/keys/FuseNetwork/UTC--xxxx
$HOME/fusenet/config/pass.pwd

:::

#### Delegate

To delegate, send the SPARK tokens from any address to the Consensus contract address with the data: `0x5c19a95c000000000000000000000000<address without 0x>`.

:::note Example

For the address: 0xb8ce4a040e8aa33bbe2de62e92851b7d7afd52de
Use: 0x5c19a95c000000000000000000000000b8ce4a040e8aa33bbe2de62e92851b7d7afd52de as the data.
5c19a95c is for the delegate(address) function signature.
b8ce4a040e8aa33bbe2de62e92851b7d7afd52dein this example, is an address you're delegating to (without the 0x prefix)

:::

### Step 5: Wait for one cycle (approximately 1 hour).

Wait until the next cycle is started.

:::tip

You can see that you are validating both on the health site

:::

For live support, contact us on Telegram or Discord. Good luck, and happy validating!
