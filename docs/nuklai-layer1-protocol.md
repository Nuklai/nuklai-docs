---
sidebar_position: 3
---

# Nuklai Layer 1 Protocol

## Overview

Nuklai's architecture is designed in such a way that data sharing, requesting, and querying can all take place on-chain and in a decentralized way. This enables builders to create trustless data-focused technologies and platforms on top of the Nuklai network. The network supports next-generation Large Language Models (LLMs) and artificial intelligence (AI) by offering a decentralized computational network for training and using AI-driven solutions.

The use of a public network is complemented by private data-sharing subnets, which enable secure and trustless data sharing via the establishment of data consortiums. This is particularly beneficial for builders focusing on specific industries or communities that exchange sensitive or private data.

## Why Decentralization Matters

Existing data-sharing networks and intelligence platforms heavily rely on centralized services. When businesses share data, especially with potential competitors, they expose themselves to risk through their valuable assets. Data-sharing consortiums need a high level of trust among all network participants, which is challenging to establish and maintain. Who will own and maintain the infrastructure needed? Who is appointed to control accounting, and how will you detect fraudulent activity? Decentralization offers a solution by removing the need for trust. In a decentralized network, participants can engage confidently, knowing they remain in control over their data and their interests are protected.

Nuklai is an ecosystem that, unlike traditional platforms that rely on central entities for operation and maintenance, is designed to be self-sustaining, ensuring its longevity and resilience. In a decentralized ecosystem like Nuklai, the absence of reliance on central parties for backend services is a significant advantage. This structure guarantees that the ecosystem remains operational and efficient, even if individual companies within it face challenges or cease operations.

Contributors outside of the network contribute to datasets and enhance metadata. It will be too much hassle to set up an agreement between each contributor and data provider to ensure each contributor is fairly rewarded for their contributions. Decentralizing these agreements through code and tracking the contributions on-chain ensures that rewards are transparently distributed as agreed without having to trust an intermediary.

## Nodes

The network of nodes and subnets serves as a way to secure the network and as a way of distributing compute power to network participants that need to run big data pipelines or train custom large language models using the data in Nuklai's ecosystem.

### Compute Nodes

Compute Nodes serve as the distributed computational power of the Nuklai network. They provide CPU and GPU power that can perform a variety of complex tasks such as training custom AI (like LLMs). Those that run compute nodes get compensated in NAI for sharing their idle resources.

### Validator Nodes

Validator Nodes function as the auditors, looking for errors or attempts to compromise the network with false information. They ensure the integrity of computations and transactions that take place within the network. Validator nodes also ensure that the network's specific tasks are executed and they are responsible for the emission balancer.

### Compute Nodes

The nodes within Nuklai's ecosystem provide distributed computing power, capable of managing extensive data pipelines or training custom large language models. For instance, in the field of meteorology, this computational capacity is instrumental in enhancing weather forecasting and climate modeling. Such advancements are vital for sectors like agriculture and disaster management. Similarly, in healthcare, the distributed network supports federated learning, facilitating the development of medical AI models while prioritizing patient privacy.

For small and medium-sized businesses, which typically lack the resources to operate and maintain advanced technological infrastructures, this distributed compute network opens the door to a wide array of applications that were previously inaccessible.

Compensation for compute node operators is issued in NAI tokens. Upon the initiation of a compute power request, the requisite amount of NAI is determined and reserved until the task is completed and verified. A portion of each transaction, specifically 25%, is allocated to the emission balancer protocol.

Participation as a compute node requires operators to stake NAI tokens (500,000 NAI). This stake is at risk of being reduced, or 'slashed', should the node exhibit unreliable outputs or suffer from recurring or significant downtime.

### Validator Nodes

The validators of the network ensure the decentralization and thus the security of the network. Their primary role is to validate the transactions and that each action on the network adheres to the network's protocol and rules. Additionally, they are also tasked with confirming the compute resources that have been spent by the compute nodes, run the emission balancer and execute the network-specific tasks, like:

- Distribute dataset revenue to all stakeholders, ensuring that contributors are fairly rewarded.
- Record actions, like querying datasets and data pipeline executions, to ensure that results can be traced back to their origins.
- Enforce access control.

The minimum stake for node operators is set at 1.5 million NAI, which must be maintained for a minimum duration of six months to avoid slashing penalties. For the initial 100 nodes, the annual percentage rate (APR) on their stake is set at 25%. Beyond this threshold, the APR is proportionately distributed among all nodes. Consequently, with 200 validator nodes, the APR would be 12.5%. In the network's initial phase, validator nodes require authorization before joining the network.

## Transaction Fees

With each transaction on the network that mutates the state of the blockchain, a transaction fee needs to be paid to reward the nodes for validating and executing these transactions. These fees are paid in NAI. Transaction fees bear a minimum, determined by the units of work that will take place but can be increased to convince a node to pick up the transaction before others when a quick time of execution is important. Of each transaction fee paid, 50% is automatically submitted to the emission balancer. The remainder is used to reward the nodes for validating the network.

## Network Curators

The Nuklai network requires active participation by its curators. These individuals or companies play a significant role in adding value to the network by introducing new data, curating existing data, transactions that take place, contributions that have been made, and by ensuring that ethical standards are upheld. Newly sourced data acts as a diverse source of information for data analysis and applications. Since these individuals or companies spent significant resources introducing unique, relevant, and often hard-to-source datasets they bring tremendous value to the network. This data can then be used within advanced analytics, machine learning, or the training of other artificial intelligence models such as large language models.

By introducing new unique data, curators help maintain the network's value. In addition to those that contribute data, curators in the Nuklai network as 'contributors' increase the utility of existing datasets through deeply enriching the metadata of the datasets. This process contextualizes the data by annotating it and tagging it in various ways. This increases the accessibility, interpretability, and applicability of the data. By doing this work, curators increase the value of the raw data and transform it into a more valuable asset.

Curators also combine different datasets with each other, thereby unveiling new insights and correlations. The synthesis of these diverse datasets results in new datasets of their own. Such datasets may reveal patterns and trends that were hidden before, opening the door for potential innovation and problem-solving. Curators are key players that are driving the network's value.

## Network Utility

<div class="center-docs-images">
    <img src="/img/nuklayer1.webp" alt="What is Nuklai" width="700" />
</div>

As a decentralized network that powers the new data economy, the Nuklai network requires a network token to function. This network token has several utilities within the ecosystem:

- **Means of access and toll**: Each transaction that is done on the network is registered and validated. Participants of the network pay a fee for the usage of the network. This fee is paid with the NAI token.
- **Means of reward**: Contributors to the network are incentivized through NAI tokens in order to bootstrap the network and increase the level of decentralization of the network.
- **Means of data-control**: When data is shared within (semi) private consortium networks, new Nuklai subnets are deployed and are required to be connected and secured by the main Nuklai network. In order to secure and validate these subnets, NAI is required as well.
- **Means of compute power**: Computational power that is added to the network and is used by participants to execute large data pipelines, train their AI, or custom large language models on, are rewarded in NAI for providing the computational power to the network. Depending on how long and how complex these computations are, the rewards in NAI will vary.
- **Means of governance**: Participants in the network determine the future of the network and the token serves as a democratic and decentralized way of decision making that are in the best interest of the participants of the network.

## Network Token Distribution

The Nuklai network follows a system in which inflation is reduced over time by means of reducing the block rewards gradually. Each month the inflation rate gradually drops according to the activity on the network, until the maximum supply of 10 billion NAI tokens is reached.

On top of that, the Nuklai network incentivizes sufficient decentralization by rewarding nodes that secure the network to provide the decentralized security that is needed. The token distribution of the network is optimized for both node decentralization and the formation of the DAO treasury.

- **Token distribution**: NAI will be launched with an initial supply at genesis of 853 million NAI. An Emission Balancer is implemented as a mechanism to avoid unlimited growth, ensuring stabilization of the maximum supply of 10 billion NAI, assuming sufficient utilization of the main network and the computational nodes.

## Nuklai DAO

The DAO will be installed to give each stakeholder in the ecosystem a voice and a vote in decision-making for the future of the Nuklai network. Anyone that is a holder of NAI is able to make a proposal. Where validators provide technical decentralization, the DAO makes sure that the governance of the network is decentralized. It is foreseen that there are a few important topics that the DAO can decide upon:

- Spending & Budget limits of the DAO can be increased or decreased depending on the DAO budget.
- The maximum APY validator nodes receive at a given time.
- DAO token allocations to community incentives, marketing and business development, and further technical development of the ecosystem.

The DAO will receive its first allocation of NAI at the inception of the mainnet. It will continuously receive NAI until a total allocation of 1.3B is emitted and can only be utilized by the DAO itself.

## Emission Balancer

In order to balance the token emissions of the network and achieve a theoretical maximum supply, mechanisms to reduce the emission of tokens will be put in place:

- When computational nodes are used within the network, 25% of their income will be used within the emission balancer.
- 50% of all transaction fees will be subject to the emission balancer at all times.

### Example

50% of all transaction fees and 25% of the computational income will be accrued in the Emission Balancer, totaling 3M tokens over the coming month.

2M tokens are minted over the coming month to reward the validator nodes.

Instead of minting 2M new tokens, the Emission Balancer's treasury is used to reward the validator nodes.

1M tokens are left in the Emission Balancer, which will reset to 0 in the next Emission Balancer epoch (approximately one month).

Note, that even though in the example a period of a month is used, new token emissions and emission balancer transactions take place per block.

## Introducing a New Data Economy

The following scenarios illustrate how the Nuklai network will create a new data economy and will showcase the utility of the network token.

### Data Consortium

Data Consortiums are established by multiple organizations that benefit from sharing data with other consortium members. Within these consortiums, there is a need to control the data that is shared and who has access to which datasets, which can be limited to a set of approved partners. Some of the industries where data consortiums are likely to be formed are within the web3 ecosystem, the agricultural technology sector, the automotive industry, and many others.

An example of a data consortium would be a car manufacturer ecosystem, where various companies in the supply and value chain work together with each other. The car manufacturer can share data (either for free or paid) with dealerships and vice versa. Other data might be shared with start-ups that are working to improve some technological innovation they are working on or to train an AI. Data usage can be tracked and micro-payments can take place where relevant.

### Data Collaborations & Curation

Companies and individuals alike can contribute to datasets, as it's tracked who provided what data or metadata. Data collaborators can work together to enhance the metadata of datasets, even optimized for different specific purposes (human-readability, AI integration, etc.). The incremental benefits this brings, is that smaller companies or even groups of individuals could pool together their data and monetize it. This creates a leveled playing field against larger competitors within the data space.

### Access to Data

Capgemini research showed that the majority of global enterprises have large amounts of datasets that remain underutilized. At the same time, companies are looking outside of their organization for valuable data sources for various reasons. Such as improving their machine learning or artificial intelligence models or providing their large language models with structured data. All of this to get better business insights and do better forecasting. With the introduction of Nuklai, we intend to break down the barriers that currently exist when companies want to monetize their underutilized data or purchase data from third parties.

### Access to Computing Power (Computational Nodes)

Compute power is increasingly becoming a critical resource for businesses and researchers, especially in the fields that require intensive computational tasks such as federated learning, machine learning, and the training of artificial intelligence models. A robust and scalable computational resource is required to process large amounts of data, redefining algorithms, and performing complex statistical simulations. This is especially pronounced in the field of artificial intelligence and machine learning, where the training and fine-tuning of models require substantial computational capacity.

Federated learning, an approach to machine learning, further propels this demand by enabling the training of algorithms across multiple decentralized devices or servers, thereby necessitating significant distributed computer power.

---

You've reached the finale! We hope you're as excited as we are about the numerous possibilities that the Nuklai Layer 1 Network will unlock for its users!

On the next page, you can dive into our data marketplace!
