---
sidebar_position: 1
---

# Intro to NuklaiVM

### Overview

Welcome to the `nuklaivm` documentation! `nuklaivm` is a blockchain Virtual Machine (VM) built using the `hypersdk` framework from Ava Labs. It is designed to run as one of the subnets in the Avalanche network, leveraging the unique features of Avalanche to enhance the capabilities of blockchain applications.

`nuklaivm` combines the functionalities of previously developed VMs, such as `morpheusvm` and `tokenvm`, and introduces new features like native token staking and an emission balancer. This makes it a versatile and powerful tool for developers looking to deploy scalable and efficient blockchain solutions.

This section will provide you with a high-level understanding of `nuklaivm`, its purpose, and how it fits within the Avalanche ecosystem. Whether you are a blockchain enthusiast, a developer, or just curious about the technology, this guide will help you understand the key concepts and functionalities of `nuklaivm`.

### Purpose of `nuklaivm`

`nuklaivm` aims to provide a robust and flexible environment for deploying and managing blockchain applications. Its integration into the Avalanche network allows it to benefit from the network's high throughput, low latency, and secure consensus mechanism. Here are a few key purposes of `nuklaivm`:

-   **Tokenization**: Facilitate the creation, minting, and management of digital assets and tokens.
    
-   **Interoperability**: Enable seamless asset transfers and communication across different subnets within the Avalanche ecosystem through Avalanche Warp Messaging (AWM).
    
-   **Decentralized Finance (DeFi)**: Support a wide range of DeFi applications by providing tools for asset trading, staking, and governance.
    
-   **Scalability**: Handle large volumes of transactions efficiently, thanks to the underlying `hypersdk` framework, designed for high-performance blockchain solutions.
    
-   **Customization**: Allow developers to customize and extend the VM's capabilities to suit specific application needs.
    

### `nuklaivm` and Avalanche Network

`nuklaivm` operates as a subnet within the Avalanche network, which is a highly scalable, interoperable, and secure platform for decentralized applications. By running as a subnet, `nuklaivm` benefits from:

-   **Security**: Leverage the security model of Avalanche, which ensures the integrity and security of transactions and operations within `nuklaivm`.
    
-   **Custom Consensus**: Implement custom consensus protocols tailored to specific use cases, optimizing performance and responsiveness.
    
-   **Network Effects**: Benefit from the broader Avalanche ecosystem, including integration with other subnets and access to a wide user base and application marketplace.
    

### Nuklaivm features

#### Actions

-   ☑ Transfer both the native asset `NAI` and any other token created by users within the same subnet
    
-   ☑ Transfer both the native asset `NAI` and any other token created by users to another subnet using Avalanche Warp Messaging(AWM)
    
-   ☑ Create a token
    
-   ☑ Mint a token
    
-   ☑ Burn a token
    
-   ☑ Export both the native asset `NAI` and any other user tokens to another subnet that is also a `nuklaivm`
    
-   ☑ Import both the native asset `NAI` and any other user tokens from another subnet that is also a `nuklaivm`
    
-   ☑ Register validator for staking
    
-   ☑ Unregister validator from staking
    
-   ☑ Delegate NAI to any currently staked validator
    
-   ☑ Undelegate NAI from a staked validator
    
-   ☑ Claim Validator staking rewards
    
-   ☑ Claim User delegation rewards
    

#### Emission Balancer

-   ☑ Tracks total supply of NAI, max supply of NAI, staking rewards per block and the emission address to direct 50% of all fees to
    
-   ☑ Register validator for staking
    
-   ☑ Unregister validator from staking
    
-   ☑ Delegate `NAI` to a validator
    
-   ☑ Undelegate `NAI` from a validator
    
-   ☑ Claim the staking/delegation rewards
    
-   ☑ Track the staking information for each users and validators
    
-   ☑ Distribute 50% fees to emission balancer address and 50% to all the staked validators per block
    
-   ☑ Distribute NAI as staking rewards to the validators that have a minimum stake of at least 100 NAI per block
    

### Getting Started

The next sections of this documentation will guide you through setting up `nuklaivm`, developing applications, and utilizing its full range of features. Whether you are setting up a local test environment, integrating `nuklaivm` into your development workflow, or deploying production-ready applications, this guide will provide the necessary steps and resources.

Stay tuned as we dive deeper into the functionalities and development practices with `nuklaivm` in the upcoming sections.