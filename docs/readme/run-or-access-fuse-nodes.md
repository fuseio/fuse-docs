# Run or Access Fuse Nodes

## Run Local Node

This guide will walk you through running your validator node using a docker image. Please ensure you can access a continuously running machine to participate as a network validator.

### Pre-Requisites

A complete [Docker](https://docs.docker.com/) environment is needed to be installed on your system, as well as [Docker-Compose](https://docs.docker.com/compose/)

Ensure your user is added to the `docker` user group on _Unix_ systems if you can't access root permissions to run containers.

### Hardware

_Note: specified for_ [_Microsoft Azure_](https://portal.azure.com/)_, but similar on other providers as well_

**Bootnode, Node, or Explorer Node**

* OS - `Linux (ubuntu 18.04)`
* Size - `Standard B2ms (2 vcpus, 8 GiB memory)`
* Disk - `30 GiB Premium SSD`
* Networking

```
| Priority     | Description                        | Port      | Protocol     | Source                      | Destination        | Action     |
|----------    |--------------------------------    |-------    |----------    |-------------------------    |----------------    |--------    |
| 1000         | ssh                                | 22        | TCP          | ip list comma-separated     | Any                | Allow      |
| 1001         | p2p                                | 30303     | TCP          | Any                         | Any                | Allow      |
| 1002         | p2p udp                            | 30303     | UDP          | Any                         | Any                | Allow      |
| 1003         | rpc                                | 8545      | TCP          | Any                         | Any                | Allow      |
| 1004         | https                              | 443       | TCP          | Any                         | Any                | Allow      |
| 1005         | http                               | 80        | TCP          | Any                         | Any                | Allow      |
| 65000        | AllowVnetInBound                   | Any       | Any          | VirtualNetwork              | VirtualNetwork     | Allow      |
| 65001        | AllowAzureLoadBalancerInBound      | Any       | Any          | AzureLoadBalancer           | Any                | Allow      |
| 65500        | DenyAllInBound                     | Any       | Any          | Any                         | Any                | Deny       |
```

**Validator**

* OS - `Linux (ubuntu 18.04)`
* Size - `Standard D2s v3 (2 vcpus, 8 GiB memory)`
* Disk - `30 GiB Premium SSD`
* Networking

```
| Priority     | Description                        | Port      | Protocol     | Source                      | Destination        | Action     |
|----------    |--------------------------------    |-------    |----------    |-------------------------    |----------------    |--------    |
| 1000         | ssh                                | 22        | TCP          | ip list comma-separated     | Any                | Allow      |
| 1001         | p2p                                | 30303     | TCP          | Any                         | Any                | Allow      |
| 1002         | p2p udp                            | 30303     | UDP          | Any                         | Any                | Allow      |
```

### Using Quickstart

The quickstart script can make starting a node for the FuseNetwork as quick as possible.

1. Download the script.
2. Download one of the example `.env` files located in the [examples folder](https://github.com/fuseio/fuse-network/tree/master/scripts/examples).
3. Modify the `.env` file according to the role/type of node you're running.
4. Start the script.

The script will ensure you have everything necessary, create a new account for you (if needed) and start the relevant containers (based on the role/type of node) with all requested arguments.

The script can be called multiple times without problems, so it checks what is already there and will at least update all service processes.

```
$ wget -O quickstart.sh https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/quickstart.sh
$ chmod 777 quickstart.sh
$ wget -O .env https://raw.githubusercontent.com/fuseio/fuse-network/master/scripts/examples/.env.<ROLE>.example
$ ./quickstart.sh
```

Follow the instructions emitted by the script.

### Using Docker

The following instructions explain starting a local node with the _Docker_ image.

It uses a pre-configured [Parity Ethereum](https://www.parity.io/) client and a set-up wrapper to make connecting easy.

The image is prepared to be used as a node, validator, or explorer node.

**Usage**

To run the parity client for the Fuse Network, you first have to pull the image from [DockerHub](https://hub.docker.com/r/fusenet/node).

It does not matter in which directory you are working this step cause it will be added to _Docker_'s database.

Afterward, the help should give a basic overview of how to use it.

```
$ docker pull fusenet/node
$ docker run fusenet/node --help

     # NAME
#   Parity Wrapper
#
# SYNOPSIS
#   parity_wrapper.sh [-r] [role] [-a] [address] [-p] [arguments]
#
# DESCRIPTION
#   A wrapper for the actual Parity client to make the Docker image easy usable by preparing the Parity client for
#   a set of predefined list of roles the client can take without have to write lines of arguments on run Docker.
#
# OPTIONS
#   -r [--role]         Role the Parity client should use.
#                       Depending on the chosen role Parity gets prepared for that role.
#                       Selecting a specific role can require further arguments.
#                       Checkout ROLES for further information.
#
#   -a [--address]      The Ethereum address that parity should use.
#                       Depending on the chosen role, the address gets inserted at the right place of the configuration, so Parity is aware of it.
#                       Gets ignored if not necessary for the chosen role.
#
#   -p [--parity-args]  Additional arguments that should be forwarded to the Parity client.
#                       Make sure this is the last argument, cause everything after is forwarded to Parity.
#
# ROLES
#   The list of available roles is:
#
#   bootnode
#     - No mining.
#     - RPC ports open.
#     - Does not require the address argument.
#     - Does not need the password file and the key-set. (see FILES)
#   node
#     - No mining.
#     - RPC ports open.
#     - Does not require the address argument.
#     - Does not need the password file and the key-set. (see FILES)
#
#   validator
#     - Connect as authority to the network for validating blocks.
#     - Miner.
#     - RPC ports open.
#     - Requires the address argument.
#     - Needs the password file and the key-set. (see FILES)
#
#   explorer
#     - No mining.
#     - RPC ports open.
#     - Does not require the address argument.
#     - Does not need the password file and the key-set. (see FILES)
#     - Some of Parity's settings are configured specifically for the use of blockscout explorer.
#
# FILES
#   The configuration folder for Parity takes place at /home/parity/.local/share/io.parity.ethereum.
#   Alternately the shorthand symbolic link at /config can be used.
#   Parity's database is at /home/parity/.local/share/io.parity.ethereum/chains or available trough /data as well.
#   To provide custom files in addition bind a volume through Docker to the sub-folder called 'custom'.
#   The password file is expected to be placed in the custom configuration folder names 'pass.pwd'.
#   The key-set is expected to to be placed in the custom configuration folder under 'keys/FuseNetwork/'
#   Besides from using the pre-defined locations, it is possible to define them manually thought the parity arguments. Checkout their documentation to do so.
```

**Examples**

Besides the original help, the following sections provide some example instructions on how to get started for the different roles.

**Bootnode**

```
## Start parity container with all necessary arguments.
$ docker run \
    --detach \
    --name fusenet \
    --volume $(pwd)/fusenet/database:/data \
    --volume $(pwd)/fusenet/config:/config/custom \
    -p 30303:30300/tcp \
    -p 30303:30300/udp \
    -p 8545:8545 \
    -p 8546:8546 \
    --restart=on-failure \
    fusenet/node \
    --role node \
    --parity-args --no-warp --node-key $NODE_KEY --bootnodes=$BOOTNODES
```

**Node**

```
## Start parity container with all necessary arguments.
$ docker run \
    --detach \
    --name fusenet \
    --volume $(pwd)/fusenet/database:/data \
    --volume $(pwd)/fusenet/config:/config/custom \
    -p 30303:30300/tcp \
    -p 30303:30300/udp \
    -p 8545:8545 \
    -p 8546:8546 \
    --restart=on-failure \
    fusenet/node \
    --role node \
    --parity-args --no-warp --node-key $NODE_KEY
```

**Validator**

The validator should be connected with an account to sign transactions and interact with the blockchain. The help output states that the account key pair, address, and related password are necessary.

To make all files accessible to the _Docker_ container needs a bound volume.

Therefore create a new folder to do so.

The following instructions expect the folder `config` inside the current working directory. Adjust them if you prefer a different location.

Inside a directory for the keys with another sub-directory for the FuseNetwork chain is used by _Parity_.

Your key-file has to be placed there.

Afterward, the key's password has to be stored in a file directly inside the `config` folder.

To make use of the default configurations without adjustment, the file has to be called `pass.pwd`.

[Check out this section](https://github.com/fuseio/fuse-network/blob/master/README.md#create-new-account) if you have no account or want to create a new one.

Using the previous paragraph and the first 2-3 instructions can be ignored.

Anyways the password used there has to be stored as shown below.

Finally, the client has to be started with the volume bound, the correct role, and the address to use.

```
$ mkdir -p ./config/keys/FuseNetwork
$ cp /path/to/my/key ./config/keys/FuseNetwork/
$ echo "mysupersecretpassphrase" > ./config/pass.pwd
$ mkdir ./database
## Start parity container with all necessary arguments.
$ docker run \
    --detach \
    --name fusenet \
    --volume $(pwd)/fusenet/database:/data \
    --volume $(pwd)/fusenet/config:/config/custom \
    -p 30303:30300/tcp \
    -p 30303:30300/udp \
    -p 8545:8545 \
    --restart=on-failure \
    fusenet/node \
    --role validator \
    --address $address
```

As part of the validator's responsibilities in the network, two more containers need to be started alongside the Parity node.

One is the [validator-app](https://github.com/fuseio/fuse-network/tree/master/app)

```
## Start validator-app container with all necessary arguments.
$ docker run \
    --detach \
    --name fuseapp \
    --volume $(pwd)/fusenet/config:/config/custom \
    --restart=on-failure \
    fusenet/validator-app
```

Second one is the [bridge-oracle](https://github.com/fuseio/bridge-oracle)

```
$ wget -O docker-compose.yml https://raw.githubusercontent.com/fuseio/bridge-oracle/master/docker-compose.keystore.yml
## Start oracle container with all necessary arguments.
$ docker-compose up \
    --build \
    -d
  ;;
```

**Create New Account**

If you have no existing account or a new one should be created anyway, _Parity_ could be used to do so.

Please consider other options like [MetaMask](https://metamask.io/) or any other (online) wallet tool.

Concerning the instructions for the [validator](https://github.com/fuseio/fuse-network/blob/master/README.md#validator) role, we use the folder called `config` to bind as _Docker_ volume to _Parity_.

Afterward, the key will be placed there, and the first steps of these instructions can be skipped.

```
$ mkdir ./config
$ docker run -ti -v $(pwd)/config/:/config/custom fusenet/node --parity-args account new
```

_Parity_ will ask for a password that should be stored by you into `./config/pass.pwd` afterward.

The address corresponding to the generated private key gets printed out on the CLI at the last line, starting with `0x`.

Please copy it for later use. It will be needed for the `--address` an argument where it will be added in plain text.

**Explorer node**

If you want to run a node to be used by the [blockscout explorer](https://github.com/fuseio/blockscout/tree/fuse), run the following command:

```
## Start parity container with all necessary arguments.
$ docker run \
    --detach \
    --name fusenet \
    --volume $(pwd)/fusenet/database:/data \
    --volume $(pwd)/fusenet/config:/config/custom \
    -p 30303:30300/tcp \
    -p 30303:30300/udp \
    -p 8545:8545 \
    -p 8546:8546 \
    --restart=on-failure \
    fusenet/node \
    --role explorer \
    --parity-args --node-key $NODE_KEY
```

_**Note**_

All roles should also run an [Ethereum Network Intelligence API](https://github.com/fuseio/eth-net-intelligence-api) app as well, to connect themselves as part of the network and be viewed by the [health](https://health.fuse.io/) service

```
$ docker run \
    --detach \
    --name fusenetstat \
    --net=container:fusenet \
    --restart=on-failure \
    fusenet/netstat \
    --instance-name $INSTANCE_NAME
```
