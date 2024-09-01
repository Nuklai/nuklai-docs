---
sidebar_position: 1
---

# HyperSDK Core RPC Endpoints

These endpoints interact with the base Hypersdk layer, giving you fundamental details about the Nuklai blockchain.

> **NOTE**: Please replace `RPC_URL`with your own endpoint. It will be different depending on if you're running Nuklai Subnet locally or interacting with testnet or mainnet.

## **Ping**

Check the availability of the RPC service.

**cURL:**

```cURL
curl -X POST --data '{"jsonrpc":"2.0", "id" :1, "method" :"hypersdk.ping"}' -H 'content-type:application/json;' http://RPC_URL/coreapi
```

**JavaScript (using Fetch API):**

```js
fetch('RPC_URL/coreapi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "hypersdk.ping"
  })
})
.then(response => response.json())
.then(data => console.log(data)); 
```

**Output:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "success": true
  }
}
```

## **Network**

Get details about the network, subnet, and chain IDs.

**cURL:**

```cURL
curl -X POST --data '{"jsonrpc":"2.0", "id" :1, "method" :"hypersdk.network"}' -H 'content-type:application/json;' http://RPC_URL/coreapi
```

**JavaScript (using Fetch API):**

```js
fetch('RPC_URL/coreapi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "hypersdk.network"
  })
})
.then(response => response.json())
.then(data => console.log(data)); 
```

**Output:**

```json
{
  "jsonrpc": "2.0",
  "result": {
    "networkId": 1338,
    "subnetId": "giY8tswWgZmcAWzPkoNrmjjrykited7GJ9799SsFzTiq5a1ML",
    "chainId": "26Vthezeix2KTscG6UjngN5EaCtr1dWCrdUTHkosFCLFmFeRwz"
  },
  "id": 1
}
```

## **Accepted**

Retrieve information about the last accepted block.

**cURL:**

```cURL
curl -X POST --data '{"jsonrpc":"2.0", "id" :1, "method" :"hypersdk.lastAccepted"}' -H 'content-type:application/json;' http://RPC_URL/coreapi
```

**JavaScript (using Fetch API):**

```js
fetch('RPC_URL/coreapi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "hypersdk.lastAccepted"
  })
})
.then(response => response.json())
.then(data => console.log(data)); 
```

**Output:**

```json
{
  "jsonrpc": "2.0",
  "result": {
    "height": 58183,
    "blockId": "2Ep944jga8Ar2fHi8VkKhmDKDNf1sk4YaAAPyow4MeaKT6Wk2",
    "timestamp": 1718653945728
  },
  "id": 1
}
```

## **UnitPrices**

Fetch the current unit prices for transactions.

**cURL:**

```cURL
curl -X POST --data '{"jsonrpc":"2.0", "id" :1, "method" :"hypersdk.unitPrices"}' -H 'content-type:application/json;' http://RPC_URL/coreapi
```

**JavaScript (using Fetch API):**

```js
fetch('RPC_URL/coreapi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "hypersdk.unitPrices"
  })
})
.then(response => response.json())
.then(data => console.log(data)); 
```

**Output:**

```json
{
  "jsonrpc": "2.0",
  "result": {
    "unitPrices": [
      100,
      100,
      100,
      100,
      100
    ]
  },
  "id": 1
}
```