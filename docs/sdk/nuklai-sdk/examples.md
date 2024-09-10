---
sidebar_position: 8
---

# Tutorial: Offchain Voting Using Onchain Balance

In this example, we will explore the concept of decentralized offchain voting using your Nuklai onchain balance on the NuklaiVM via the Nuklai SDK.

By combining the advantages of onchain and offchain solutions, we can create a voting system that is both scalable and secure.

## Benefits

- **Increased scalability**: Offchain voting significantly reduces blockchain congestion while maintaining security. By using your Nuklai onchain balance or a custom-created asset on Nuklai as the governance token for verification but conducting the actual voting offchain, the system can handle a large number of voters without significantly affecting the Nuklai blockchain's performance.

- **Improved security**: Onchain balance can be used to verify the legitimacy of voters and ensure that each vote is cast by a unique individual in the Nuklai ecosystem who own a particular supply of an asset, also ensuring that those with more invested in the ecosystem have a stronger voice, while still allowing all token holders to participate.

## Implementation

A decentralized voting platform on the Nuklai blockchain enables users to participate in elections onchain from anywhere globally by leveraging the power of the NuklaiVM.

### Onchain Balance Verification

Onchain balance verification is a crucial component of this voting system, ensuring both voter eligibility and vote weight.

**Here's how it works:**

1. **Balance-based Eligibility and Weight:**

   - Voters' eligibility and voting power are determined by their onchain token balance at the time of voting.
   - The system uses the current block's state to fetch the most up-to-date balance information.
   - This approach ensures that voting power is proportional to a user's ownership in the network. And could be changed to ensure the user has X supply of an onchain custom created token/asset.

2. **Cryptographic Verification:**

   - Users sign a unique message with their private key to prove ownership of their address and authenticate their vote.
   - This signature, combined with the public address, allows for secure and verifiable voter identification without compromising privacy.

3. **Token Balance Fetching:**

   - After authentication, the system queries the blockchain to retrieve the current balance of the voting token for the user's address.
   - This balance is used to calculate the voter's voting power according to predefined rules (e.g., 0.2 NAI = 1 vote, or more complex formulas).

Using a simple setup as seen below, we can authenticate a user and fetch their `NAI` token balance. To fetch a custom token balance, replace `nai` with the assetId if that's the approach you would like to use:

```javascript
import { HyperchainSDK, auth, actions } from '@nuklai/hyperchain-sdk'
import { NuklaiSDK } from '@nuklai/nuklai-sdk'

const sdk = new NuklaiSDK({
  baseApiUrl: 'https://api-devnet.nuklaivm-dev.net:9650', // Node API URL
  blockchainId: 'JopL8T69GBW1orW4ZkJ1TBRzF97KXaY8e64atDA1v2M12SNqm' // Blockchain ID
})

async function signAndGetBalance(privateKey){
 const authFactory = auth.getAuthFactory('ed25519',privateKey)
 const encodedMessage = new TextEncoder().encode("ED25519");
 const ed25519_Auth = await authFactory.sign(encodedMessage)
 const userAddress = ed25519_Auth.address().toString()
 const balance = await sdk.rpcServiceNuklai.getBalance({ address: userAddress , asset: "nai" });
 console.log({"address": userAddress,"balance": balance})
}
```

After verifying the user's identity and fetching their token balance, we receive an output of the user's public address and their token balance:

```bash
{
  address: 'nuklai1qp5pjgq6cum83d3kz2wp0knepfajnluzf2df37zcg92ldavz9rqc20tr8zv',
  balance: { amount: 0.899886754 }
}
```

## Offchain Voting Process

The actual voting process occurs offchain to ensure scalability, reduce blockchain congestion. Here's an improved explanation of the offchain voting process:

Votes can be recorded in an offchain database such as Postgres, MongoDB, Firebase, or in a decentralized storage platform such as Filecoin or IPFS.

## Sample Voting dApp

This dApp demonstrates the integration of Nuklai Network with a web interface, utilizing onchain balance for vote weight and offchain storage for scalability.

### Prerequisites

1. Create a [Nuklai Wallet](https://wallet.nuklaivm.com/).
2. Obtain test NAI tokens from the faucet.

You can then use these funds as your voting weight.

### Creating the dApp

To create this dapp, start by creating a React app:

```shell
npx create-react-app nuklai-voting-demo
cd nuklai-voting-demo
```

Start the development server:

```shell
npm start
```

Install all dependencies (since we are using Firebase for this example, we include its dependency):

```shell
npm install @nuklai/hyperchain-sdk
npm install @nuklai/nuklai-sdk
npm install firebase
```

Next, create a `utils.js` file to handle the signing, voter verification, and user vote count. This is done in one extensive function:

```javascript
export async function signAndGetBalance(privateKey, vote) {
  // User authentication
  const authFactory = auth.getAuthFactory('ed25519', privateKey);
  const encodedMessage = new TextEncoder().encode('ED25519');
  const ed25519_Auth = await authFactory.sign(encodedMessage);
  const userAddress = ed25519_Auth.address().toString();

  // Fetch NAI balance
  const balance = await sdk.rpcServiceNuklai.getBalance({
    address: userAddress,
    asset: 'nai',
  });

  // Check if the user has already voted
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `outputs/${userAddress}`));
  
  if (snapshot.exists()) {
    alert('You have already voted. Multiple votes are not allowed.');
    return null;
  }

  // Calculate vote weight (1 vote per 0.2 NAI)
  const votes = Math.floor(balance.amount / 0.2);
  if (votes < 1) {
    alert('Votes are less than one. You need at least 0.2 amount to have 1 vote.');
    return null;
  }

  const result = { address: userAddress, balance: balance.amount, votes, vote };

  console.log(`Address: ${userAddress}`);
  console.log(`Balance: ${balance.amount}`);
  console.log(`Votes: ${votes}`);
  console.log(`Selected Vote: ${vote}`);

  // Record vote
  const outputsRef = ref(database, `outputs/${userAddress}`); 
  await push(outputsRef, {
    address: userAddress,
    balance: balance.amount,
    votes: votes,
    vote: vote,
    timestamp: new Date().toISOString(),
  });

  return result;
}
```

In the function above, the NAI balance is checked, double voting is prevented, and `0.2 NAI` is calculated to equal 1 vote.

### Firebase Setup

To communicate with Firebase, set up the Firebase configuration from the Firebase console. Create `firebase.js` and plug in the configuration as below:

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  databaseURL: "your-database-url", 
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 

export { database };
```

### Displaying Votes

Create a `Votes.js` page to fetch and view all votes done on the platform. Display the public address, the vote choice, the vote weight, and their respective timestamps, all stored in the database as a structured list:

```javascript
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { database } from "../services/firebase";
import { ref, onValue } from 'firebase/database';

function Votes() {
  const [voteData, setVoteData] = useState({ yes: 0, no: 0, abstain: 0 });
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const outputsRef = ref(database, "outputs");
    onValue(outputsRef, (snapshot) => {
      const data = snapshot.val();
      const newVoteData = { yes: 0, no: 0, abstain: 0 };
      let newTotalVotes = 0;

      if (data) {
        Object.values(data).forEach((userVotes) => {
          Object.values(userVotes).forEach((vote) => {
            newVoteData[vote.vote] += vote.votes;
            newTotalVotes += vote.votes;
          });
        });
      }

      setVoteData(newVoteData);
      setTotalVotes(newTotalVotes);
    });
  }, []);

  const chartData = Object.entries(voteData).map(([name, value]) => ({ name, value }));
  const COLORS = ["#10B981", "#EF4444", "#F59E0B"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Vote Results</h1>
      {totalVotes > 0 ? (
        <>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${((value / totalVotes) * 100).toFixed(1)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center text-xl font-bold mt-4">
            Total Votes: {totalVotes}
          </div>
        </>
      ) : (
        <p className="text-center text-2xl">No votes recorded yet</p>
      )}
    </div>
  );
}

export default Votes;
```

The official Example code is open for preview below:

- GitHub: [https://github.com/Nuklai/nuklai-voting-demo](https://github.com/Nuklai/nuklai-voting-demo)
- Vercel Demo: [https://nuklai-voting-demo.vercel.app/](https://nuklai-voting-demo.vercel.app/)
