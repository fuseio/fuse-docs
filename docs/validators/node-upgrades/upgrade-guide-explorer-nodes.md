---
description: This guide is intended specifically for explorer nodes.
---

# Upgrade Guide (explorer nodes)

Since we don't host snapshots for explorer DBs, some extra steps are required to update from V1.0.0 to V2.0.0.

### Step 1 - Stop all running containers

```
sudo docker stop $(sudo docker ps -q)
```

### Step 2 - Pull the latest quickstart script

```
cd <to quickstart.sh location>
wget -O quickstart.sh https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/quickstart.sh
```

### Step 3 - Upgrade your DB using OEs upgrade tool

It is highly recommended to back up your database folder before attempting!.

Follow the instruction here to upgrade from V13->V16 DBs [https://github.com/openethereum/3.1-db-upgrade-tool](https://github.com/openethereum/3.1-db-upgrade-tool). The database is stored in \<path to quickstart.sh>/fusenet/database/FuseNetwork/db/dee77c98f8210dbb/archive

### Step 4 - Update the Client version in env file and rerun quickstart

```
vim .env
Add the following (without quotes) "CLIENT=OE"
Save and exit :w :q
sudo ./quickstart.sh
```

### Step 5 - Verify Upgrade

Check your node on our [health site ](https://health.fuse.io)It should be online, and the client should be "OpenEthereum//v3.2.6-stable" ensure your node is connected to peers and syncing/ in sync.
