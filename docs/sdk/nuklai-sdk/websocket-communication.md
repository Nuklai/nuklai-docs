---
sidebar_position: 7
---

# WebSocket Communication with the Nuklai SDK

WebSocket communication allows for real-time, bi-directional interaction with the NuklaiVM. This guide covers how to establish a WebSocket connection, listen for blocks and transactions, and handle real-time updates using the Nuklai SDK.

## Establishing a WebSocket Connection

To start using WebSocket communication, you first need to create an instance of the NuklaiSDK and access its WebSocketService:

```typescript
import { NuklaiSDK } from '@nuklai/nuklai-sdk';

const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

const wsService = sdk.wsServiceNuklai;
```

To establish a connection:

```typescript
async function connectWebSocket() {
  try {
    await wsService.connect();
    console.log('WebSocket connection established');
  } catch (error) {
    console.error('Failed to connect WebSocket:', error);
  }
}

connectWebSocket();
```

## Listening for Blocks and Transactions

Once connected, you can listen for new blocks and transactions:

### Listening for Blocks

```typescript
async function listenForBlocks() {
  try {
    const err = await wsService.registerBlocks();
    if (err) {
      throw err;
    }

    while (true) {
      const { block, results, err } = await wsService.listenBlock(
        sdk.actionRegistry,
        sdk.authRegistry
      );

      if (err) {
        console.error('Error in block:', err);
        continue;
      }

      console.log('New block received:', block.toJSON());
      console.log('Block results:', results.map(result => result.toJSON()));
    }
  } catch (error) {
    console.error('Error in block listening:', error);
  }
}

listenForBlocks();
```

### Listening for Specific Transactions

The WebSocketService provides a method to listen for specific transactions:

```typescript
async function sendAndListenForTransaction(to: string, asset: string, amount: number, memo: string, authFactory: auth.AuthFactory) {
  try {
    const txID = await wsService.sendTransferTransactionAndWait(
      to,
      asset,
      amount,
      memo,
      authFactory,
      sdk.rpcService,
      sdk.actionRegistry,
      sdk.authRegistry
    );

    console.log('Transaction confirmed:', txID);
  } catch (error) {
    console.error('Error in transaction:', error);
  }
}
```

## Example: Real-time Updates and Event Handling

The WebSocket connection can be used for real-time updates and event handling in your application. Here's an example of how to implement a real-time update system:

```typescript
import { NuklaiSDK, auth, chain } from '@nuklai/nuklai-sdk';

class RealTimeUpdater {
  private sdk: NuklaiSDK;
  private wsService: WebSocketService;

  constructor(sdk: NuklaiSDK) {
    this.sdk = sdk;
    this.wsService = sdk.wsServiceNuklai;
  }

  async start() {
    await this.wsService.connect();
    await this.wsService.registerBlocks();

    this.listenForUpdates();
  }

  private async listenForUpdates() {
    while (true) {
      try {
        const { block, results, err } = await this.wsService.listenBlock(
          this.sdk.actionRegistry,
          this.sdk.authRegistry
        );

        if (err) {
          console.error('Error in block:', err);
          continue;
        }

        this.handleNewBlock(block);
        this.handleBlockResults(results);
      } catch (error) {
        console.error('Error in update listening:', error);
      }
    }
  }

  private handleNewBlock(block: any) {
    console.log('New block received:', block);
    // Implement block handling logic
  }

  private handleBlockResults(results: any[]) {
    console.log('Block results:', results);
    // Implement result handling logic
  }

  async stop() {
    await this.wsService.close();
    console.log('WebSocket connection closed');
  }
}

// Usage
const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

const updater = new RealTimeUpdater(sdk);
updater.start();
```

This `RealTimeUpdater` class sets up a continuous listener for new blocks and handles different types of updates (new blocks, block results) in separate methods. You can extend this class to implement specific business logic for each type of update/usecases.

Remember to properly handle WebSocket connection errors and implement reconnection logic for production applications. Also, consider implementing a way to gracefully stop the WebSocket connection when it's no longer needed:

```typescript
async stop() {
  await this.wsService.close();
  console.log('WebSocket connection closed');
}
```
