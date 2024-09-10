---
sidebar_position: 7
---

# General Guides to using the Hyperchain SDK

## Creating and Submitting Transactions

Transactions are the primary way to interact with a blockchain built using the Hyperchain SDK. Here's a step-by-step guide to creating and submitting transactions:

### 1. Initialize the SDK

```javascript
import { HyperchainSDK, auth, actions, utils } from '@nuklai/hyperchain-sdk'

const sdk = new HyperchainSDK({
    baseApiUrl: 'http://127.0.0.1:9650',
    blockchainId: 'YourBlockchainID'
})
```

### 2. Create an auth factory

```javascript
const authFactory = auth.getAuthFactory('ed25519', 'YourPrivateKeyHex')
```

### 3. Create an action registry (e.g., a transfer)

```javascript
const transfer = new actions.Transfer(
  'ReceiverAddress',
  'AssetID',
  utils.parseBalance(0.1, 9), // Amount
  'Memo'
)
```

### 4. Generate and submit the transaction

```javascript
const { submit, txSigned, err } = await sdk.rpcService.generateTransaction(
  genesisInfo,
  sdk.actionRegistry,
  sdk.authRegistry,
  [transfer],
  authFactory
)

if (err) {
  console.error('Error generating transaction:', err)
  return
}

try {
  const response = await submit()
  console.log('Transaction submitted:', txSigned.id().toString())
  console.log('Transaction ID:', response.txId)
} catch (submitError) {
  console.error('Error submitting transaction:', submitError)
}
```

## Listening for Blockchain Events

Real-time monitoring of blockchain events is crucial for many applications. Here's how to listen for new blocks and transactions:

1. Connect to the WebSocket service:

```javascript
await sdk.wsService.connect()
```

2. Register for block updates:

```javascript
const err = await sdk.wsService.registerBlocks()
if (err) {
    console.error("Error registering for blocks:", err)
    return
}
```

3. Listen for new blocks:

```javascript
while (true) {
    try {
        const { block, results, prices, err } = await sdk.wsService.listenBlock(
            sdk.actionRegistry,
            sdk.authRegistry
        )

        if (err) {
            console.error('Error in block:', err)
            continue
        }

        console.log('New block:', block.toJSON())
        console.log('Block results:', results)
        console.log('Prices:', prices)
    } catch (error) {
        console.error('Error listening for blocks:', error)
    }
}   
```

4. Don't forget to close the connection when done:

```javascript
await sdk.wsService.close()
```

## Implementing Custom Actions

Custom actions allow you to define specific operations for your blockchain. Here's how to implement a custom action:

1. Define your custom action class:

```typescript
import { Action } from '@nuklai/hyperchain-sdk'

export class CustomAction implements Action {
  constructor(private data: string) {}

  getTypeId(): number {
    return YOUR_CUSTOM_ACTION_ID
  }

  toBytes(): Uint8Array {
    // Implement serialization logic
  }

  size(): number {
    // Return the size of the serialized action
  }

  computeUnits(): number {
    // Return the compute units required for this action
  }

  stateKeysMaxChunks(): number[] {
    // Return the maximum number of state chunks this action might use
  }

  toJSON(): object {
    // Return a JSON representation of the action
  }

  toString(): string {
    // Return a string representation of the action
  }
}
```

2. Register your custom action with the SDK:

```typescript
sdk.actionRegistry.register(
  YOUR_CUSTOM_ACTION_ID,
  CustomAction.fromBytesCodec,
  false
)
```

3. Use your custom action in transactions:

```typescript
const customAction = new CustomAction('Some data')
// Use this action when creating transactions
```

Following these guides, you can effectively use the Hyperchain SDK to create and manage custom
blockchains with specific behaviors and efficient state management.
