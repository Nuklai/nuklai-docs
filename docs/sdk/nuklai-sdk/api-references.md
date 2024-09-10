---
sidebar_position: 5
---

# API Reference

This document provides a comprehensive reference for the Nuklai SDK API. It covers the main classes, methods, and interfaces that developers will interact with when building applications on the Nuklai blockchain.

## NuklaiSDK Class

The main entry point for interacting with the Nuklai blockchain.

### Constructor

```typescript
constructor(nodeConfig?: Partial<config.NodeConfig>)
```

Parameters:

- `nodeConfig` (optional): Partial configuration object for the SDK.

Example:

```typescript
const sdk = new NuklaiSDK({
  baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});
```

### Properties

- rpcService: services.RpcService
- wsService: services.WebSocketService
- rpcServiceNuklai: RpcService
- wsServiceNuklai: WebSocketService
- actionRegistry: chain.ActionRegistry
- authRegistry: chain.AuthRegistry

## RPC Service

Handles JSON-RPC communications with the blockchain node.

### Methods

#### ping()

Check the health status of the node.

```typescript
async ping(): Promise<PingResponse>
```

#### getNetworkInfo()

Retrieve network information.

```typescript
async getNetworkInfo(): Promise<GetNetworkInfoResponse>
```

#### getGenesisInfo()

Fetch genesis information.

```typescript
async getGenesisInfo(): Promise<GetGenesisInfoResponse>
```

#### getBalance(params: GetBalanceParams)

Get the balance for a specific address and asset.

```typescript
async getBalance(params: GetBalanceParams): Promise<GetBalanceResponse>
```

#### getAssetInfo(params: GetAssetInfoParams)

Retrieve information about a specific asset.

```typescript
async getAssetInfo(params: GetAssetInfoParams): Promise<GetAssetInfoResponse>
```

#### getEmissionInfo()

Get current emission information.

```typescript
async getEmissionInfo(): Promise<GetEmissionInfoResponse>
```

#### sendTransferTransaction(to: string, asset: string, amount: number, memo: string, authFactory: AuthFactory, hyperApiService: RpcService, actionRegistry: ActionRegistry, authRegistry: AuthRegistry)

Send a transfer transaction.

```typescript
async sendTransferTransaction(
  to: string,
  asset: string,
  amount: number,
  memo: string,
  authFactory: AuthFactory,
  hyperApiService: RpcService,
  actionRegistry: ActionRegistry,
  authRegistry: AuthRegistry
): Promise<string>
```

## WebSocket Service

Manages real-time communications for events and updates.

### Methods

#### connect()

Establish a WebSocket connection.

```typescript
async connect(): Promise<void>
```

#### registerBlocks()

Register for block updates.

```typescript
async registerBlocks(): Promise<Error | undefined>
```

#### listenBlock(actionRegistry: ActionRegistry, authRegistry: AuthRegistry)

Listen for new blocks.

```typescript
async listenBlock(
  actionRegistry: ActionRegistry,
  authRegistry: AuthRegistry
): Promise<{
  block: StatefulBlock;
  results: Array<Result>;
  prices: Dimension;
  err: Error | undefined;
}>
```

#### close()

Close the WebSocket connection.

```typescript
async close(): Promise<void>
```

## Action Types

### Transfer

Represents a token transfer action.

```typescript
class Transfer implements Action {
  constructor(
    public to: string,
    public asset: string,
    public value: bigint,
    public memo: string
  )
}
```

### CreateAsset

Represents an action to create a new asset.

```typescript
class CreateAsset implements Action {
  constructor(
    public symbol: string,
    public decimals: number,
    public metadata: string
  )
}
```

### MintAsset

Represents an action to mint additional tokens of an existing asset.

```typescript
class MintAsset implements Action {
  constructor(
    public to: string,
    public asset: string,
    public amount: bigint
  )
}
```

## Authentication Methods

### ED25519Factory

Factory for creating ED25519 authentication objects.

```typescript
class ED25519Factory implements AuthFactory {
  constructor(private privateKey: Uint8Array)

  sign(msg: Uint8Array): Auth
  computeUnits(): number
  bandwidth(): number
}
```

### BLSFactory

Factory for creating BLS authentication objects.

```typescript
class BLSFactory implements AuthFactory {
  constructor(private privateKey: bls.PrivateKey)

  sign(msg: Uint8Array): Auth
  computeUnits(): number
  bandwidth(): number
}
```

## Utility Functions

### parseBalance(balance: string | number, decimals: number): bigint

Parse a balance string or number into a bigint value.

```typescript
function parseBalance(balance: string | number, decimals: number): bigint
```

### formatBalance(balance: bigint, decimals: number): string

Format a bigint balance into a human-readable string.

```typescript
function formatBalance(balance: bigint, decimals: number): string
```

## Interfaces

### GetBalanceParams

```typescript
interface GetBalanceParams {
  address: string;
  asset: string;
}
```

### GetBalanceResponse

```typescript
interface GetBalanceResponse {
  amount: string;
}
```

### GetAssetInfoParams

```typescript
interface GetAssetInfoParams {
  asset: string;
}
```

### GetAssetInfoResponse

```typescript
interface GetAssetInfoResponse {
  symbol: string;
  decimals: number;
  metadata: string;
  supply: string;
}
```

### GetEmissionInfoResponse

```typescript
interface GetEmissionInfoResponse {
  totalSupply: string;
  maxSupply: string;
  totalStaked: string;
  rewardsPerEpoch: string;
  emissionAccount: {
    accumulatedReward: string;
  };
}
```

This API reference provides a comprehensive overview of the main classes, methods, and interfaces available in the Nuklai SDK. Developers can use this as a quick reference when working with the SDK. For more detailed information on usage and examples, refer to other sections of the docs.
