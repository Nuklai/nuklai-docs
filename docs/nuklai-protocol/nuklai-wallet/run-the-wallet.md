---
sidebar_position: 1
---

# Run the Wallet

To run the Nuklai Wallet locally, follow the steps below:

## **Clone the Repository**

1.  **Clone the Nuklai Wallet GitHub Repository:**
    
    Open your terminal and run the following command:
    
    ```sh
    git clone https://github.com/Nuklai/nuklai-wallet
    ```
    
2.  **Navigate to the Repository Directory:**
    
    Change to the directory where the repository was cloned:
    
    ```sh
    cd nuklai-wallet
    ```

## **Build the Wallet**

1.  **Execute the Build Script:**
    
    Run the following command to build the wallet:
    
    ```sh
    ./scripts/build.sh
    ```

## **Update Configuration**

1.  **Update** `**config.json**` **File:**
    
    Open the `config.json` file in your preferred text editor and update it with your values for `nuklaiRPC`, `faucetRPC`, and `feedRPC`.
    

## **Run the Wallet**

1.  **Copy the Example Environment File:**
    
    Copy the example environment file to create your `.env` file:
    
    ```sh
    cp .env.example .env
    ```
    
2.  **Start the Wallet in Development Mode:**
    
    Run the following command to start the wallet:
    
    ```sh
    wails dev
    ```
    
3.  **Access the Wallet:**
    
    By default, the wallet will open as a new desktop application. Alternatively, you can interact with the wallet through your web browser by navigating to:
    
    [http://localhost:34115](http://localhost:34115/)
    

By following these steps, you will have a fully functional Nuklai Wallet running locally, allowing you to interact with the Nuklai network and perform various tasks such as viewing transactions, minting tokens, and more.