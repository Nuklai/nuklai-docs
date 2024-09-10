---
sidebar_position: 6
---

# Guides to Using The Nuklai SDK

This section provides detailed guides on how to perform common operations using the Nuklai SDK. Each guide includes step-by-step instructions and code examples to help you implement key features in your applications.

## Creating and Managing Assets

Creating and managing assets is a fundamental operation in the Nuklai ecosystem. This guide will walk you through the process of creating a new asset, minting additional tokens, and querying asset information.

### Creating a New Asset

To create a new asset:

```typescript
import { NuklaiSDK, auth } from '@nuklai/nuklai-sdk';

async function createNewAsset(symbol: string, decimals: number, metadata: string, privateKey: string) {
const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

  const authFactory = auth.getAuthFactory('ed25519', privateKey);

  try {
    const { txID, assetID } = await sdk.rpcServiceNuklai.sendCreateAssetTransaction(
      symbol,
      decimals,
      metadata,
      authFactory,
      sdk.rpcService,
      sdk.actionRegistry,
      sdk.authRegistry
    );

    console.log(`Asset created successfully. Transaction ID: ${txID}`);
    console.log(`New Asset ID: ${assetID}`);

    return assetID;
  } catch (error) {
    console.error('Failed to create asset:', error);
  }
}
```

### Minting Additional Supply

To mint additional supply of an existing asset/token:

```typescript
async function mintAsset(assetID: string, amount: number, recipient: string, privateKey: string) {
  const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

  const authFactory = auth.getAuthFactory('ed25519', privateKey);

  try {
    const txID = await sdk.rpcServiceNuklai.sendMintAssetTransaction(
      recipient,
      assetID,
      amount,
      authFactory,
      sdk.rpcService,
      sdk.actionRegistry,
      sdk.authRegistry
    );

    console.log(`Tokens minted successfully. Transaction ID: ${txID}`);
  } catch (error) {
    console.error('Failed to mint tokens:', error);
  }
}
```

### Querying Asset Information

To retrieve information about an asset:

```typescript
async function getAssetInfo(assetID: string) {
  const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

  try {
    const assetInfo = await sdk.rpcServiceNuklai.getAssetInfo({ asset: assetID });
    console.log('Asset Information:', {
      ...assetInfo,
      symbol: new TextDecoder().decode(assetInfo.symbol),
      metadata: new TextDecoder().decode(assetInfo.metadata)
    });
    return assetInfo;
  } catch (error) {
    console.error('Failed to fetch asset info:', error);
  }
}
```

## Transferring Tokens

```typescript
import { NuklaiSDK, auth } from '@nuklai/nuklai-sdk';

async function transferTokens(recipient: string, assetID: string, amount: number, privateKey: string) {
  const sdk = new NuklaiSDK({
  baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

  const authFactory = auth.getAuthFactory('ed25519', privateKey);

  try {
    const txID = await sdk.rpcServiceNuklai.sendTransferTransaction(
      recipient,
      assetID,
      amount,
      'Token transfer',
      authFactory,
      sdk.rpcService,
      sdk.actionRegistry,
      sdk.authRegistry
    );

    console.log(`Transfer successful. Transaction ID: ${txID}`);
  } catch (error) {
    console.error('Failed to transfer tokens:', error);
  }
}
```

## Interacting with the Emission Balancer

The Emission Balancer is a unique feature of the Nuklai blockchain. This guide shows how to interact with it to retrieve emission information.

```typescript
import { NuklaiSDK } from '@nuklai/nuklai-sdk';

async function getEmissionInfo() {
  const sdk = new NuklaiSDK({
    baseApiUrl: 'http://api-devnet.nuklaivm-dev.net:9650',
    blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm'
});

  try {
    const emissionInfo = await sdk.rpcServiceNuklai.getEmissionInfo();
    console.log('Emission Information:', emissionInfo);
    return emissionInfo;
  } catch (error) {
    console.error('Failed to fetch emission info:', error);
  }
}

// Usage
getEmissionInfo();
```

These guides provide an overview of the key operations that you can perform using the Nuklai SDK.
