---
sidebar_position: 4
---

# Dataset Subscription and Query Guide

Getting access to data on Nuklai's public data marketplace is a simple and straightforward process. You'll be able choose exactly how long you wish to subscribe to the data and once you've subscribed you can query the data via our user interface or public API.

In this user guide, we will show you how to subscribe to your first dataset.

When you arrive on the Nuklai marketplace, you will see several datasets listed. When you click on one of these datasets, you will get more information about that dataset.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bfa1721a47ff2a2460f3a_Dataset%2520overview.png&width=768&dpr=1&quality=100&sign=a30c42ce&sv=1" alt="Dataset detail page" width="700" />
</div>

Before you decide to make a purchase, you can view some essential information about the dataset:

The first thing you might want to do is to download a sample of the dataset by clicking the Download sample button. Dataset publishers have the option to make a sample available of their dataset, this sample can be downloaded for further analysis and is made available for you in JSON format. You can open this sample for further inspection with your preferred code editor.

Other information you might want to review before making a purchase:

- Dataset Rating: how other users rate this dataset, subscriptions have rated the dataset.
- Subscriptions: the amount of subscriptions that have been sold for this dataset
- Published: the date that this dataset has become public.
- Update Frequency: the commitment of the data publisher means how often they will update the dataset with new data.
- Total Updates: how many updates have been made to the data of the dataset
- Last Update: the date of the latest update to the data of the dataset
- License: the license regarding the usage of this data is important to view. Some data publishers might want you to use the data for certain goals.

Once you are ready to make a purchase, you can click the Subscribe button. You can either type the amount of days you would like to subscribe to this dataset, or you can use the slider to adjust the amount of days. The price updates automatically so you can see how much this subscription will cost you.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bfbbafccf5c14aba53cfa_Subscribe%2520button%2520.png&width=768&dpr=1&quality=100&sign=fbda2735&sv=1" alt="Subscribe to dataset" width="700" />
</div>

You may see a button Approve USDC.e. This means you first need to approve the USDC.e you are willing to spend on the subscription before making the purchase. You approve the USDC.e by signing the transaction in your wallet.

Now the button Subscribe should be visible, when you click this button you will be asked to sign another transaction in your wallet. A confirmation message appears once you have subscribed successfully.

You will now be able to see your subscription in your subscriptions panel. If you click the renew button, you can either renew an expired subscription or extend an existing subscription.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bfbed62d6ada434e164ec_Query%2520dataset.png&width=768&dpr=1&quality=100&sign=1ae4295a&sv=1" alt="Query dataset" width="700" />
</div>

Once you subscribed to the dataset, you are now able to query the dataset. You have two options to query the dataset, either through the user interface or through our public API. In this userguide we will discuss how to query the data through the user interface.

To query the dataset through the user interface, click the query button (rocket icon), you will now see 3 tabs:

- Query: you will now see an example SQL query prefilled. This query is designed to query the first 5 records out of the dataset.
- Tree view: here the results of the query are displayed once the query is executed.
- Metadata view: View the metadata of the dataset, the metadata can provide you in depth contextual information about the contents of the dataset.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bfce457936d3ccef52f76_Query%2520Dataset.png&width=768&dpr=1&quality=100&sign=ea042a4c&sv=1" alt="Write and query via UI" width="700" />
</div>

To execute the SQL query click on the query button (rocket icon). Once the query is executed you will be able to view the result of your query in the "Tree view". A maximum of 1000 records are displayed, if you wish to query more than 1000 records, you will be required to use our public API.

In order to reset your SQL query to the default query click the reset button (trash icon).

Congratulations, you've successfully subscribed to your first dataset and have also executed a first query!