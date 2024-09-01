---
sidebar_position: 2
---

# Getting Started

This section will guide you through the installation and initial configuration of `nuklaivm`, providing a step-by-step approach to setting up the environment and configuring the necessary parameters to get the Virtual Machine running on your local system or in a production setting.

### Installation

Before you begin, ensure that your system meets the following prerequisites:

-   **Operating System**:
    
    -   Linux (Ubuntu 20.04 recommended)
        
    -   MacOS
        
    -   Windows Subsystem for Linux (WSL2)
        
    
-   **Memory**: At least 8 GB of RAM
    
-   **Storage**: At least 10 GB of free disk space
    

#### Step 1: Clone the Repository

Start by cloning the `nuklaivm` repository from GitHub to your local machine. Open a terminal window and run the following command:

```sh
git clone https://github.com/Nuklai/nuklaivm.git
cd nuklaivm
```

-   Checkout`v0.1.0` git tag to use the stable version
    
-   Checkout `main` branch to use the latest version
    

#### Step 2: Build the Project

After cloning the repository, build the `nuklaivm` project to compile the source code into executable binaries:

```sh
./scripts/build.sh
```

This script will handle the compilation of all components required for `nuklaivm` to run.

### Running `nuklaivm`

To start `nuklaivm`, use the following command:

```sh
./scripts/run.sh
```

You should see output indicating that the VM is initializing, two subnets running the `nuklaivm` , and 5 validators running on each subnet. Once it starts, `nuklaivm` will begin processing transactions and blocks according to the rules defined in our `run.sh` file.