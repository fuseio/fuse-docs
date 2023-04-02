---
description: For Nodes, Bootnodes and Validators
---

# Upgrade Guide

{% hint style="info" %}
This guide assumes that you have created your node via our [quickstart script](https://github.com/fuseio/fuse-network/blob/master/scripts/quickstart.sh). If you have built your own client using our spec, ensure that your client matches the officially supported client and use the most up-to-date [chain spec](https://github.com/fuseio/fuse-network/blob/master/config/spec.json).
{% endhint %}

### Prerequisites

The update will pull the latest database from our latest snapshot, so please ensure that you have at least 20GB of disk space free before starting.

### Step 1 - CD to the location of quickstart.sh and update quickstart

```
cd <location of quickstart.sh>
wget -O quickstart.sh https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/quickstart.sh
```

### Step 2 - Run quickstart and agree to upgrade

```
sudo ./quickstart.sh
Agree [Y] when prompted to upgrade
Wait for script to complete
```

### Step 3 - Verify Upgrade

Check your node on our [health site ](https://health.fuse.io)It should be online, and the client should be "OpenEthereum//v3.2.6-stable" ensure your node is connected to peers and syncing/ in sync.

### &#x20;<a href="#step-3-verify-upgrade" id="step-3-verify-upgrade"></a>

Check your node on our [health site ](https://health.fuse.io/)It should be online, and the client should be "OpenEthereum//v3.2.6-stable" ensure your node is connected to peers and syncing/ in sync.
