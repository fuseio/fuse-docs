---
sidebar_position: 2
---

## Pre-requirements

To be a Fuse validator, you first must see that you meet the pre-requirements:

- You know what it means to be a Fuse validator - How to become a validator
- You have at least 100K FUSE tokens, or you will have an aggregated delegation of at least 100K FUSE tokens (you can purchase FUSE tokens on Uniswap).
- You have an always-on hardware that meets the pre-requisites - How to run network nodes

## How to become a Fuse validator

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

(optional) set 'VAL_NAME' to display a custom name on health.fuse.io (cannot contain spaces)

```

### Step 3: Run the script as a validator:

```bash

./quickstart.sh

```

:::tip

After running the script successfully, you will see your address in the health site.

:::

### Step 4: Stake and/or delegate!

#### Stake

To stake FUSE tokens, all you should do is send your FUSE tokens to the Fuse Consensus contract address over the Fuse network from the validator address.

:::tip

The Fuse Consensus contract address:

0x3014ca10b91cb3D0AD85fEf7A3Cb95BCAc9c0f79

:::

The easiest way is to import your private key or key-store file to your favorite wallet (for example, Metamask), switch the network to Fuse, and send the FUSE tokens (native tokens) to the Consensus contract address.

:::info

You can find your key-store (containing your private key) and the password for the created account in:
$HOME/fusenet/config/keys/FuseNetwork/UTC--xxxx
$HOME/fusenet/config/pass.pwd

:::

#### Delegate

To delegate, send the FUSE tokens from any address to the Consensus contract address with the data: 0x5c19a95c000000000000000000000000<address without 0x>.

:::note Example

For the address: 0xb8ce4a040e8aa33bbe2de62e92851b7d7afd52de
Use: 0x5c19a95c000000000000000000000000b8ce4a040e8aa33bbe2de62e92851b7d7afd52de as the data.

:::

### Step 5: Wait for one cycle (approximately 48 hours).

Wait until the next cycle is started.

:::tip

For live support, contact us on Telegram or Discord. Good luck, and happy validating!

:::

For live support, contact us on Telegram or Discord. Good luck, and happy validating!
