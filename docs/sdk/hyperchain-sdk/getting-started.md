---
sidebar_position: 2
---

# Getting Started

This guide will walk you through the process of setting up and using the Hyperchain SDK in your project.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js `v20.0.0` or higher
- npm or yarn package manager

### Installing the SDK

You can install the Hyperchain SDK using npm or yarn:

Using npm:

```bash
npm install @nuklai/hyperchain-sdk
```

Using yarn:

```bash
yarn add @nuklai/hyperchain-sdk
```

## Quick Start Guide

### 1. Inititalize Your Project

If you haven't already, initialize a new Node.js/Typescript project:

```bash
mkdir hyperchain-project
cd hyperchain-project
npm init -y
```

Install dependencies:

```bash
npm install typescript @types/node --save-dev
npx tsc --init
```

### 2. Create Your First Script

Create a new file, e.g., `index.ts`, in your project directory and add the following code:

```typescript
import { HyperchainSDK, auth } from '@nuklai/hyperchain-sdk';

async function main() {
  // Initialize the SDK
  const sdk = new HyperchainSDK({
    baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650',
    blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
  });

  // Check node health
  try {
    const healthStatus = await sdk.rpcService.ping();
    console.log('Node Health Status:', JSON.stringify(healthStatus, null, 2));
  } catch (error) {
    console.error('Error checking node health:', error);
  }

  // Generate a key pair
  const { privateKey, publicKey } = auth.BLSFactory.generateKeyPair();
  console.log('Generated BLS Private Key:', auth.BLSFactory.privateKeyToHex(privateKey));
  console.log('Generated BLS Public Key:', auth.BLS.publicKeyToHex(publicKey));
}

main().catch(console.error);
```

### 3. Run Your Script

Compile and run your TypeScript file:

```bash
npx ts-node index.ts
```

## Next Steps

Now that you've set up the Hyperchain SDK and ran a basic script, you can explore more advanced features:

1. Learn about creating and submitting a transactions to the `NuklaiVM`.
2. Explore custom action implementations for HyperchainSDK.
3. Dive into real-time block monitoring using WebSockets.

Refer to the API Reference and Guides sections for more detailed information on using the Hyperchain SDK.
