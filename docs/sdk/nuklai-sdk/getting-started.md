---
sidebar_position: 3
---

# Getting Started with Nuklai SDK

## Basic Setup

Before diving into the Nuklai SDK, ensure you have completed the installation process outlined in the previous section.
This guide assumes you have a working Next.js and/or Node.js environment and have installed
the Nuklai SDK either via npm/yarn or by building from source.

## Initializing the SDK

To begin using the Nuklai SDK, you need to import and initialize it in your project.
The SDK provides a main `NuklaiSDK` class that serves as the entry point for all interactions with the Nuklai blockchain.

```typescript
import { NuklaiSDK } from '@nuklai/nuklai-sdk';

const sdk = new NuklaiSDK({
  baseApiUrl: 'https://api.nuklai.network',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});
```

Parameters:

- `baseApiUrl`: The URL of the Nuklai network API endpoint.

- `blockchainId`: The unique identifier of the Nuklai blockchain.

## Simple Usage Examples

### 1. Checking Network Health

One of the first operations you might want to perform is checking the health of the Nuklai network:

```typescript
async function checkNetworkHealth() {
  try {
    const healthStatus = await sdk.rpcService.ping();
    console.log('Network Health:', JSON.stringify(healthStatus, null, 2));
  } catch (error) {
    console.error('Failed to check network health:', error);
  }
}
 
checkNetworkHealth();
```

### 2. Fetching Network Information

To get detailed information about the Nuklai network:

```typescript
async function getNetworkInfo() {
  try {
    const networkInfo = await sdk.rpcService.getNetworkInfo();
    console.log('Network Info:', JSON.stringify(networkInfo, null, 2));
  } catch (error) {
    console.error('Failed to fetch network info:', error);
  }
}

getNetworkInfo();
```

### 3. Querying Account Balance

To check the balance of an account:

```typescript
async function getAccountBalance(address: string, assetId: string) {
  try {
    const balance = await sdk.rpcServiceNuklai.getBalance({
      address,
      asset: assetId
    });
    console.log(`Balance for ${address}:`, balance.amount);
  } catch (error) {
    console.error('Failed to fetch balance:', error);
  }
}

getAccountBalance('nuklai1qpxncu2a69l9wyz3yqg4fqn86ys2ll6ja7vhym5qn2vk4cdyvgj2vn4k7wz', 'NAI');
```

### 4. Creating and Submitting a Transaction

Here's an example of creating and submitting a transfer transaction:

```typescript
import { auth } from '@nuklai/hyperchain-sdk';

async function sendTransaction(
  toAddress: string,
  amount: number,
  privateKey: string
) {
  try {
    const authFactory = auth.getAuthFactory('ed25519', privateKey);

    const txID = await sdk.rpcServiceNuklai.sendTransferTransaction(
      toAddress,
      'NAI',
      amount,
      'Transfer memo',
      authFactory,
      sdk.rpcService,
      sdk.actionRegistry,
      sdk.authRegistry
    );

    console.log('Transaction submitted. ID:', txID);
  } catch (error) {
    console.error('Failed to send transaction:', error);
  }
}

sendTransaction('nuklai1qpxncu2a69l9wyz3yqg4fqn86ys2ll6ja7vhym5qn2vk4cdyvgj2vn4k7wz', 0.1, 'YOUR_PRIVATE_KEY');
```

### 5. Listening for Blockchain Events

To listen for new blocks in real-time using WebSocket:

```typescript
async function listenForBlocks(maxBlocks = 100) {
  try {
    await sdk.wsServiceNuklai.connect();
    
    const err = await sdk.wsServiceNuklai.registerBlocks();
    if (err) {
      throw err;
    }

    let blockCount = 0;
    while (blockCount < maxBlocks) {
      const { block, results, prices, err } = await sdk.wsServiceNuklai.listenBlock(
        sdk.actionRegistry,
        sdk.authRegistry
      );

      if (err) {
        console.error('Error in block:', err);
        continue;
      }

      console.log('New block:', block.toJSON());
      console.log('Block results:', results);
      console.log('Prices:', prices);

      blockCount++;
    }
  } catch (error) {
    console.error('WebSocket error:', error);
  } finally {
    await sdk.wsServiceNuklai.close();
  }
}

listenForBlocks();
```
