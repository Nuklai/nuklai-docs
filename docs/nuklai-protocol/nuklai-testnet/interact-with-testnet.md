---
sidebar_position: 2
---

# Interact with Testnet

To get started with interacting with the Nuklai Testnet, follow the steps below.

## **Run Nuklai Wallet**

Currently, the best way to interact with the testnet is to run the Nuklai Wallet and connect to it. In the future, an SDK will be provided that you can use to build your own application on top of Nuklai. Follow the instructions on [Nuklai Wallet page](https://docs.nukl.ai/nuklai-network/nuklai-wallet) to learn how to run the wallet on your computer. Once you have your wallet up and running, make sure you have the following info. If not, you will need to update it on the wallet accordingly.

### Features

Here is a list of features that are available as part of the testnet phase 1.

-   Transfer `NAI` token and any other arbitrary tokens created on the Nuklai subnet to other wallets to another subnet(cross-subnet communication done using AWM - Avalanche Warp Messaging)
    
-   Burn a token that you have created
    
-   Register validator stake for your validator node
    
-   Claim validator staking rewards once your staking period has ended
    
-   Withdraw validator stake for your validator node once your staking period has ended
    
-   Delegate `NAI` tokens to any staked validator of your choice
    
-   Undelegate `NAI` tokens from validators once your delegation period has ended
    
-   Claim User Delegation staking rewards at anytime
    

Even if all these features are available, only the following features are available on Nuklai wallet:

-   Transfer the native `NAI` token to other wallets
    
-   Transfer any arbitrary tokens created on the Nuklai testnet to other wallets
    
-   Create a token
    
-   Mint a token
    

### Interact with the official Nuklai testnet

If you want to experiment with features not currently available on the wallet but would still like to interact with the official Nuklai testnet, follow the directions below.

1.  Create a file called `rpcInfo.yaml` and add the following contents to it:
    

```yml
API:
  - IP: api-devnet.nuklaivm-dev.net
CHAIN_ID: DPqCib879gKLxtL7Wao6WTh5hNUYFFBZSL9otsLAZ6wKPJuXb
SUBNET_ID: giY8tswWgZmcAWzPkoNrmjjrykited7GJ9799SsFzTiq5a1ML
```

2.  Now, import the yaml file into nuklai-cli
    

```sh
./nuklai-cli chain import-cli ./rpcInfo.yaml
```

1.  Now, you're able to interact with the official Nuklai testnet using `nuklai-cli`
    
2.  With `nuklai-cli`, you have access to a lot more features that may not be currently available on Nuklai Wallet such as delegating your NAI tokens to a validator, claiming staking rewards, etc.
    

### Run your own Nuklai subnet locally

If you want to experiment with features not currently available on the wallet while also being able to run your own Nuklai network locally, you can run a custom Nuklai subnet locally on your machine following directions on [Nuklai APIs and CLI Tools page](https://docs.nukl.ai/nuklai-network/nuklai-cli) which lets you do other things such as registering your own validator node, delegating your NAI tokens to any staked validator of your choice, claim user rewards, undelegate, etc.