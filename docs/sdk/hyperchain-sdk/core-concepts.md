---
sidebar_position: 3
---

# Hyperchain SDK Architecture

The Hyperchain SDK is an advanced framework built on top of the Avalanche HyperSDK, designed to simplify the development of high-performance, custom blockchain applications. It provides a sophisticated abstraction layer that leverages the robust foundation of the Avalanche ecosystem while offering flexibility and ease of use for developers.

## Avalanche Network Architecture

To understand the Hyperchain SDK, it's crucial to grasp the underlying Avalanche network architecture:

1. **Subnet Structure**: Avalanche uses a subnet architecture, allowing for the creation of application-specific blockchains. Each subnet is a sovereign network with its own set of validators.

2. **Consensus Protocol**: Avalanche employs a novel consensus protocol that combines the benefits of Nakamoto consensus (robustness, scale) with classical consensus (speed, finality) through a probabilistic approach.

3. **Virtual Machines (VMs)**: Each blockchain on Avalanche is powered by a Virtual Machine, which defines the blockchain's state, state transition function, transactions, and APIs.

4. **Cross-Chain Interoperability**: Avalanche's Primary Network facilitates communication between different subnets and VMs through its Cross-Chain Protocol.

## HyperSDK: The Foundation

The [Avalanche HyperSDK](https://www.avax.network/blog/introducing-hypersdk-a-foundation-for-the-fastest-blockchains-of-the-future) is a toolkit provided by the Ava Labs Team for building custom, high-performance Virtual Machines. Key features include:

1. **Modular Design**: Offers customizable components for tailored blockchain solutions.
2. **State Management**: Efficient handling of blockchain state using a path-based merkelized radix tree.
3. **Block Execution**: Supports parallel transaction execution for improved throughput.
4. **Fee Mechanism**: Implements a multi-dimensional fee system for granular resource pricing.
5. **Network Layer**: Provides a robust P2P communication layer optimized for Avalanche's consensus.

## Hyperchain SDK: Bridging the Gap

The Hyperchain SDK builds upon the `HyperSDK`, offering additional abstractions and utilities:

1. **High-Level Abstractions**: Simplifies complex HyperSDK concepts, making it more accessible to developers.

2. **Transaction Framework**: Offers a flexible system for defining, signing, and processing custom transactions.

3. **State Management Utilities**: Provides additional tools for efficient state handling and querying.

4. **Cryptographic Operations**: Implements robust cryptographic functions, supporting multiple signature schemes.

5. **API Integration**: Simplifies the process of exposing blockchain data and functionality through standardized RPC and WebSocket APIs.

6. **Fee Estimation**: Includes sophisticated fee estimation mechanisms for accurate transaction cost prediction.

## Core Components of Hyperchain SDK

1. **Utility Functions**: Offers a range of helper functions for tasks like address formatting, balance parsing, and hashing operations.

2. **Action Interface**: Defines the structure for custom blockchain operations.

3. **Auth Interface**: Provides extensible authentication mechanisms, supporting ED25519 and BLS signature schemes.

4. **Chain Management**: Handles block creation, validation, and chain state management.

5. **Genesis Management**: Handles initial state and configuration of the blockchain.

6. **WebSocket Service**: Manages real-time communication with the VM, including block and transaction updates.

7. **RPC Service**: Facilitates interaction with the blockchain through JSON-RPC calls.

## Architecture Benefits

1. **Performance**: Leverages Avalanche's high-throughput capabilities and HyperSDK's optimizations, currently at (100K TPS).

2. **Flexibility**: Allows for custom blockchain logic while providing standardized components.

3. **Scalability**: Inherits Avalanche's subnet architecture for application-specific scaling.

4. **Interoperability**: Designed to work seamlessly within the Avalanche ecosystem.

5. **Developer Experience**: Abstracts complex blockchain concepts, accelerating development cycles.

The Hyperchain SDK generally helps you build dApps with custom blockchains on Avalanche faster. handling the complex interactions but still lets you tweak things when needed.
