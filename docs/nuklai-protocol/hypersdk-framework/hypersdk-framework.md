---
sidebar_position: 1
---

# HyperSDK framework

`nuklaivm` is built using hypersdk framework and as such, it may be necessary to learn a bit about what hypersdk is and its various capabilities to understand how nuklaivm works under the hood.

### Introduction to hypersdk

`hypersdk` is an opinionated framework designed for building hyper-scalable blockchains on the Avalanche platform. It simplifies the creation of custom Virtual Machines (VMs), allowing developers to focus on unique features of their projects without the overhead of building everything from scratch. The framework hides much of the complexity associated with blockchain development through optimized data structures and algorithms, ensuring that developers can achieve high performance effortlessly.

### Overview of hypersdk and its Capabilities

`hypersdk` facilitates the rapid development of blockchains by providing essential tools and modules pre-optimized for performance. Some of its core capabilities include:

-   **Efficient State Management**: Uses `x/merkledb` for minimized on-disk footprints and efficient state changes.
    
-   **Dynamic State Sync**: Supports syncing the most recent state from the network without re-executing all previous transactions.
    
-   **Block Pruning and Continuous Production**: Maintains minimal historical data to reduce storage requirements while continuously producing blocks to enhance network responsiveness.
    
-   **Multidimensional Fee Pricing**: Implements a sophisticated fee structure that separately measures different types of resource use, such as compute, storage, and bandwidth.
    
-   **WASM-Based Programs**: Allows the deployment of smart contracts and other programs compiled to WebAssembly, supporting multiple programming languages.
    
-   **Account Abstraction and Nonce-less Transactions**: Supports flexible transaction authorization mechanisms and removes the need for transaction ordering, simplifying user interactions.
    
-   **Proposer-Aware Gossip**: Optimizes transaction propagation to relevant validators to reduce network overhead.
    
-   **Unified Metrics, Tracing, and Logging**: Integrates seamlessly with Avalanche monitoring tools to provide detailed performance insights.
    

### Developing with hypersdk

Developers can use `hypersdk` to create highly customized VMs (hypervms) that run on Avalanche Subnets. The development process involves:

1.  **Setting Up the Development Environment**: Install necessary tools and clone the `hypersdk` repository to start custom VM development.
    
2.  **Defining Custom Actions and Auth Methods**: Implement specific business logic and authentication mechanisms that define how transactions are processed and validated within the VM.
    
3.  **Configuring Blockchain Parameters**: Adjust blockchain settings such as block time, transaction fees, and storage options to suit the specific needs of the application.
    
4.  **Testing and Deployment**: Utilize the built-in testing frameworks provided by `hypersdk` to ensure the VM operates correctly under various conditions before deploying to a live Subnet.
    

### Examples and Case Studies

#### morpheusvm

`morpheusvm` is a simple example VM built using `hypersdk` that demonstrates the basic capabilities of the framework. It includes functionalities such as native token transfers and serves as an excellent starting point for developers new to blockchain development with `hypersdk`.

#### tokenvm

`tokenvm` extends the capabilities shown in `morpheusvm` by incorporating features like token creation, minting, burning, and an on-chain exchange. This VM showcases how `hypersdk` can be used to implement a decentralized exchange (DEX) where users can trade and manage custom assets efficiently.

#### Potential Use Cases

-   **Decentralized Finance (DeFi) Platforms**: `hypersdk` can be used to build robust DeFi applications, supporting complex financial transactions, liquidity pooling, and automated market making.
    
-   **Supply Chain Tracking**: Implement a VM that handles the tracking and verification of goods as they move through a supply chain, using `hypersdk`'s efficient state management and transaction processing capabilities.
    
-   **Gaming and NFTs**: Create gaming platforms and NFT marketplaces that require high transaction throughput and complex interaction patterns between users and contracts.
    

`hypersdk` offers a powerful foundation for developing diverse applications on Avalanche's customizable blockchain networks. Its design allows developers to innovate without the complexities traditionally associated with blockchain development, making it an ideal choice for projects requiring high scalability and customization.