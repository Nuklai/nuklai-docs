---
sidebar_position: 2
---

# Uploading a Dataset on Nuklai

Contributing data on Nuklai’s public data marketplace is an important part of Nuklai's data ecosystem, opening your profile up for new business collaborations and revenue opportunities as other Nuklai members subscribe to your datasets.

In this user guide, we will show you how to publish your first dataset.

For visual learners, we have prepared this [video tutorial](https://vimeo.com/958240613).

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bc1b6d30ee3a3673d8f0f_Upload%2520Dataset.png&width=768&dpr=4&quality=100&sign=3763b8a3&sv=1" alt="What is Nuklai" width="700" />
</div>

## Upload Dataset

When you arrive on the [Nuklai marketplace](https://app.nukl.ai/), you will see a button, **Upload Dataset**. When you click this button, you will need to choose between two options:

- **Dataset**: Choose this option if you want to upload a dataset with you as the sole contributor.
- **Community Dataset**: Choose this option if you want to upload a dataset where contributions are open to any user.

Once you have chosen your desired dataset, you will be asked to fill in a title for the dataset. The title can still be changed at a later time. You will be asked to provide a file up to 2GB in size. If you have larger data files that you would like to publish, please contact [hello@nukl.ai](mailto:hello@nukl.ai) and we will assist you in getting your data published.

### Supported File Formats

- CSV
- JSON
- XML
- Parquet

When you click the **Upload** button, the file will be processed. This can take several minutes. You can view your dataset on the [My Datasets](https://www.app.nukl.ai/my-datasets) page. When the status updates from “processing” to “draft”, your dataset has been processed successfully. We now recommend you query your dataset via the user interface by clicking on the **Query** button (rocket icon) to check if all data has been correctly processed in the way you intended.

Once your dataset is in draft, you have 14 days to finalize the publication of the dataset. In this phase, you are still able to delete the dataset. After publishing, you will not be able to delete the dataset anymore. If you do wish to remove the dataset from the Nuklai data marketplace, please contact [hello@nukl.ai](mailto:hello@nukl.ai).

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bc2e862d6ada434b96613_Edit%2520Dataset.png&width=768&dpr=1&quality=100&sign=8ffcdb22&sv=1" alt="What is Nuklai" width="700" />
</div>

When you click on the **Edit** button (pencil icon), you will have several options:

- **Edit Dataset Information**: Here you can add a description of your dataset, update the title, and provide additional information about your dataset.
- **Edit Metadata**: Here you can enrich the metadata of your dataset by adding tags and descriptions to the metadata.

To continue publishing your dataset, you will need to add some information to your dataset. You do this by clicking on the **Edit** button underneath the dataset information card.

- **Dataset Name (mandatory)**: Title of the dataset that will be displayed on the Nuklai data marketplace.
- **Dataset Sample (optional)**: Choose if you want the user to see a sample of your dataset. A sample consists of 5 records within your dataset.

## License

The last step is to choose a license under which you want to publish your dataset. If you have a commercial license for your dataset, you can choose to create a **Custom License**. You have to create this license only once; it will be accessible for you for future usage.

- **Abbreviation**: Create a simple two to four letter abbreviation of your license.
- **Full License Name**: Write out the full name of your license.

To continue, click the **Save** button. Congratulations, you are now one step closer to publishing your dataset.

Before publishing, we recommend you enrich the metadata of your dataset to provide more context about the data within your dataset. Please follow the following user guide to enrich your metadata. In this guide, you will also learn how to delete certain fields from your dataset before publishing. You may want to delete some fields if these fields contain sensitive information.

To finalize the publishing of your dataset, click on the **Publish** button on the “Pricing & Publishing” card in order to finalize and publish the dataset to the Nuklai data marketplace.

You will now have to choose the base price of your dataset. The base price is the amount of $USDC.e you would ask for subscribing for one day. If a user subscribes for 30 days, the price of the subscription will be 30 x the base price.

In the overview on the right, you will be able to see an example calculation, exactly showcasing how much you earn from a subscription.

<div class="center-docs-images">
    <img src="https://docs.nukl.ai/~gitbook/image?url=https%3A%2F%2Fassets-global.website-files.com%2F657852a4e337085200314117%2F659bf77a5301617d7c7688e4_revenue%2520distribution.png&width=768&dpr=4&quality=100&sign=918af812&sv=1" alt="What is Nuklai" width="700" />
</div>

Since Nuklai is a collaborative marketplace, you can decide exactly how the revenue is distributed amongst contributors to your dataset.

- **Platform Fee**: The fee Nuklai charges for the usage of the platform. If you upload the data to the Nuklai data environment, you’ll be charged a 35% management fee. If you host the data yourself (coming soon), Nuklai will charge you a 15% management fee.
- **Management Fee (Community Datasets only)**: The fee you will receive for the management of the community dataset, such as updating the information of the dataset and promoting the dataset. The maximum fee that can be set is 50%.
- **Data Revenue Share**: This fee is split amongst the providers of the data (in several parts in the case of a community dataset).
- **Metadata Revenue Share (optional)**: The fee contributors earn for enriching the metadata (in several parts when several users contributed metadata).

When you fill in all the fields, you can click the **Save** button. MetaMask will now pop up and ask you to sign two transactions. Please do not refresh your page.

When you sign the transactions, a dataset NFT is minted. You will need some AVAX in your wallet to pay for the gas fees for minting the dataset NFT. When you want to transfer the ownership of the dataset, you will need to send your dataset NFT to another wallet. The ownership of the dataset will be automatically updated on the platform to the new wallet.

Congratulations! You have now published your dataset. You can verify this by going to the [My Datasets](https://app.nukl.ai/my-datasets) page and checking if the status of the dataset is “published”.
