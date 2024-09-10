---
sidebar_position: 4
---

# Hyperchain SDK Components

## Core Components

### 1. HyperchainSDK Class

The `HyperchainSDK` class serves as the main entry point for interacting with the SDK. It initializes and manages the following key components:

- **RPC Service**: Handles JSON-RPC communications with the blockchain node.
- **WebSocket Service**: Manages real-time communications for events and updates.
- **Action Registry**: Stores and manages custom blockchain actions.
- **Auth Registry**: Manages authentication methods and types.

```typescript
export class HyperchainSDK {
  nodeConfig: NodeConfig
  rpcService: RpcService
  wsService: WebSocketService
  actionRegistry: ActionRegistry
  authRegistry: AuthRegistry

  constructor(nodeConfig?: Partial<NodeConfig>) {
    // Initialization logic
  }

  private initializeRegistries() {
    // Register default actions and auth types
  }
}
```

### 2. Transaction Management Class

The `Transaction` class handles the creation, signing, and submission of transactions.
It provides methods for creating transactions, signing them with the appropriate
authentication methods, and submitting them to the blockchain.
```typescript
export class Transaction {
  public base: BaseTx
  public actions: Action[]
  public auth?: Auth

  constructor(base: BaseTx, actions: Action[]) {
    this.base = base
    this.actions = actions
  }

  sign(factory: AuthFactory, actionRegistry: ActionRegistry, authRegistry: AuthRegistry): [Transaction, Error?] {
    // Signing logic
  }

  // Other methods: toBytes, fromBytes, etc.
}
```
Key features:
- Modular action system
- Flexible authentication
- Efficient serialization/deserialization

### 3. Block Structure Class

The `StatefulBlock` class handles the creation and manipulation of blockchain blocks:
```typescript
export class StatefulBlock {
  prnt: Id
  tmstmp: bigint
  hght: bigint
  txs: Transaction[]
  stateRoot: Id
  size: number
  authCounts: Map<number, number>

  // Methods for serialization, deserialization, and more
}
```
This structure incorporates:
- Merkle tree integration for state verification
- Transaction aggregation
- Authentication type tracking

### 4. Fee Calculation System

The SDK implements a sophisticated, multi-dimensional fee calculation system:
```typescript
export function estimateUnits(
  genesisInfo: Genesis,
  actions: Action[],
  authFactory: AuthFactory
): Dimension {
  // Complex fee estimation logic
}
```

This system accounts for:
- Bandwidth usage
- Compute operations costs
- Storage operations costs (read, allocate, write)

### 5. Authentication System

The SDK supports multiple authentication methods and provides interfaces for authentication and authorization:

```typescript
export interface Auth {
    address(): Address
    getTypeId(): number
    verify(message: Uint8Array): Promise<boolean>
    // Other methods
}

export interface AuthFactory {
    sign(msg: Uint8Array): Auth
    computeUnits(): number
    bandwidth(): number
}
```

This system ensures secure and efficient authentication for transactions.

### 6. Action Interface

The SDK provides a modular system for defining and implementing custom blockchain actions through the `Action`
interface:
```typescript
export interface Action {
    getTypeId(): number
    toBytes(): Uint8Array
    size(): number
    computeUnits(): number
    stateKeysMaxChunks(): number[]
    toJSON(): object
    toString(): string
}
```
This interface allows for flexible definition of blockchain operations, including validation and execution logic.

### 7. WebSocket Communication

The `WebSocketService` class manages real-time communication with the blockchain network,
enabling features like transaction submission and event listening.

```typescript
export class WebSocketService {
  public uri: string
  private conn!: any
  private mb: MessageBuffer
  
  constructor(config: NodeConfig) {
    // Initialization logic
  }

  async connect() {
    // Connection logic
  }

  async registerBlocks(): Promise<Error | undefined> {
    // Block registration logic
  }

  async listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry): Promise<{
    block: StatefulBlock;
    results: Array<Result>;
    prices: Dimension;
    err: Error | undefined;
  }> {
    // Block listening logic
  }

  async registerTx(tx: Transaction): Promise<Error | undefined> {
    // Transaction registration logic
  }

  async listenTx(): Promise<{
    txId: Id;
    dErr: Error | undefined;
    result: Result | undefined;
    err: Error | undefined;
  }> {
    // Transaction listening logic
  }
  
  async close() {}
}
```

Key features:
- Real-time block and transaction updates
- Efficient message buffering
- Support for custom action and authentication registries

### 8. RPC Service

The `RpcService` class extends the `Api` class and provides methods for interacting with the blockchain node via JSON-RPC. It handles various API calls essential for blockchain operations.

```typescript
export class RpcService extends Api {
  constructor(protected config: NodeConfig) {
    super(
      config.baseApiUrl,
      `/ext/bc/${config.blockchainId}/${JSONRPC_ENDPOINT}`,
      COREAPI_METHOD_PREFIX
    )
  }

  ping(): Promise<PingResponse>
  getNetworkInfo(): Promise<GetNetworkInfoResponse>
  getLastAccepted(): Promise<GetLastAcceptedResponse>
  getUnitPrices(): Promise<GetUnitPricesResponse>
  getWarpSignatures(txID: string): Promise<GetWarpSignaturesResponse>
  submitTransaction(tx: Uint8Array): Promise<SubmitTransactionResponse>

  async generateTransaction(
    genesisInfo: Genesis,
    actionRegistry: ActionRegistry,
    authRegistry: AuthRegistry,
    actions: Action[],
    authFactory: AuthFactory
  ): Promise<{
    submit: () => Promise<SubmitTransactionResponse>
    txSigned: Transaction
    err: Error | undefined
  }>
}
```

Key features:

- Network health checks via `ping()`
- Retrieval of network information and last accepted block
- Fetching current transaction unit prices
- Submission of transactions to the network
- Generation and signing of transactions

The generateTransaction method is particularly important as it handles the complex process of creating, signing, and preparing a transaction for submission. It performs the following steps:

- Constructs the base transaction with timestamp and chain ID
- Estimates the maximum fee based on current unit prices and the provided actions
- Creates and signs the transaction
- Provides a submit function for easy transaction submission

This service is crucial for applications that need to interact with the blockchain, providing a high-level interface for common 
operations while handling low-level details like fee estimation and transaction signing.

## Key Concepts

### 1. Modular Design

The SDK's modular architecture allows developers to easily extend and customize its functionality.
This is evident in the action and authentication systems, where new types can be registered and used seamlessly.

### 2. Efficient Serialization

Custom `Codec` classes are used throughout the SDK for efficient binary serialization
and deserialization of data structures. This is crucial for network transmission and storage optimization.

### 3. State Management

The SDK provides a framework for managing VM state, with the stateRoot in `StatefulBlock` enabling efficient state verification through Merkle proofs.

### 4. Resource-aware Design

The multi-dimensional fee system ensures fair pricing of VM operations and helps prevent
network abuse by accurately accounting for resource usage.

### 5. Real-time Communication

The WebSocket service enables real-time updates and event streaming, crucial for building responsive blockchain applications. It provides:

- **Block Streaming:** Real-time updates on new blocks added to the chain.
- **Transaction Monitoring:** Immediate feedback on transaction submissions and confirmations.
- **Custom Event Handling:** Ability to listen for and react to specific blockchain events.
- **Efficient Data Processing:** Uses a MessageBuffer for handling incoming and outgoing messages, ensuring smooth communication even under high load.

The WebSocketService integrates closely with other SDK components, such as the ActionRegistry 
and AuthRegistry, to provide a seamless experience when dealing with custom blockchain actions 
and authentication methods in real-time scenarios.

### 6. Rule-based Logic

The Rules Engine allows for declarative definition of blockchain behavior. This enables easy modification of 
business logic without changing core code, enhancing flexibility and maintainability.

### 7. Action-driven Architecture

The Action interface provides a standardized way to define and execute operations on the blockchain. 
This action-driven approach allows for clear separation of concerns and easier testing 
and maintenance of individual blockchain operations.