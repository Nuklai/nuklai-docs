---
sidebar_position: 4
---

# Core Concepts of Nuklai SDK

## SDK Architecture

The Nuklai SDK is built on a modular architecture, designed to provide flexible and efficient interactions with the Nuklai blockchain. Understanding this architecture is crucial for effectively leveraging the SDK in your applications.

### High-Level Overview

```
+-------------------+
|    NuklaiSDK      |
+-------------------+
|
v
+-------------------+
|   HyperchainSDK   |
+-------------------+
|
+----+----+
|         |
v         v
+-------+ +----------+
|  RPC  | | WebSocket|
|Service| | Service  |
+-------+ +----------+
|         |
|    +----+
|    |
v    v
+-------------------+
|  Nuklai Blockchain|
+-------------------+
```

The `NuklaiSDK` class serves as the main entry point, extending the functionality provided by the `HyperchainSDK`.

## Key Components

### 1. NuklaiSDK Class

The `NuklaiSDK` class is the primary interface for developers. It initializes and manages core services and provides high-level methods for interacting with the NuklaiVM.

Key responsibilities:

- Initializing RPC and WebSocket services
- Managing action and authentication registries
- Providing a unified API for Nuklai-specific operations

### 2. RPC Service

The RPC service handles synchronous communication with the Nuklai nodes.

Key features:

- Querying blockchain state (e.g., account balances, asset information)
- Submitting transactions
- Retrieving network and emission information

### 3. WebSocket Service

The WebSocket service enables real-time, asynchronous communication with the NuklaiVM.

Key features:

- Streaming new blocks and transactions
- Real-time updates on network events
- Efficient long-polling for transaction confirmations

### 4. Action Registry

The Action Registry is a crucial component for transaction processing. It maps action types to their respective handler functions.

Example usage:

```typescript
this.actionRegistry.register(
  CREATEASSET_ID,
  CreateAsset.fromBytesCodec,
  false
)
```

### 5. Authentication System

The authentication system provides methods for securing transactions and verifying identities on the NuklaiVM.

Key components:

- `AuthFactory`: Creates authentication objects for transaction signing
- `Auth` interface: Defines the structure for different authentication methods (e.g., ED25519, BLS)

## Integration with NuklaiVM

The Nuklai SDK is tightly integrated with the NuklaiVM, the Virtual Machine powering the Nuklai blockchain. This integration enables several unique features:

### 1. Native Asset Management

The SDK provides specialized methods for interacting with `NAI`, the native asset of Nuklai:

- Creation and minting of new assets.
- Transferring assets between accounts.
- Querying asset information and balances.

### 2. Emission Balancer Interaction

A unique feature of Nuklai is its Emission Balancer, which the SDK interacts with through dedicated methods:

- Querying emission information.
- Participating in staking and delegation processes.
- Claiming rewards from the emission system.

### 3. Cross-Chain Operations

Leveraging Avalanche's Warp Messaging (AWM), the SDK facilitates cross-chain operations:

- Initiating cross-chain asset transfers
- Verifying cross-chain messages
- Managing cross-chain identities

## Transaction Lifecycle

Understanding the transaction lifecycle is crucial for effective use of the SDK:

1. **Creation**: Transactions are created using specific action types (e.g., Transfer, CreateAsset).
2. **Signing**: The transaction is signed using the appropriate `AuthFactory`.
3. **Submission**: The signed transaction is submitted to the network via RPC.
4. **Validation**: Network nodes validate the transaction.
5. **Execution**: If valid, the transaction is executed and included in a block.
6. **Confirmation**: The SDK can listen for confirmations via WebSocket.

Example transaction flow:

```typescript
const transfer = new Transfer(to, 'NAI', amount, memo);
const [txSigned, err] = await sdk.rpcService.generateTransaction(
  genesisInfo,
  sdk.actionRegistry,
  sdk.authRegistry,
  [transfer],
  authFactory
);
if (err) throw err;
await txSigned.submit();
```

## State Management

The SDK interacts with the blockchain's state, which is managed by `NuklaiVM`. Key aspects include:

- **Stateful Blocks**: Each block contains a state root, representing the entire blockchain state at that point.
- **State Queries**: The SDK provides methods to query various aspects of the blockchain state (e.g., account balances, asset properties).

## Conclusion

The Nuklai SDK's architecture and core concepts are designed to provide a powerful yet flexible interface to the Nuklai blockchain.
