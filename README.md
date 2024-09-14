# ProductManager---Blockchain

## Description
This backend application allows users to upload product details to a local IPFS instance. It stores the product information and the IPFS hash of the specifications file in a smart contract on the Polygon blockchain. The application provides API endpoints for interacting with the smart contract.

## Index
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Project Structure](#project-structure)
- [Author](#author)

Want to read this in italian?
- [Italiano](README.it.md)


## Installation
To set up this project locally clone the repository -> `git clone <repository-url>`


## Usage
To use this project, ensure you have the following installed:
- A code editor (e.g., VS Code)
- PostgreSQL
- IPFS Desktop

### Then, follow these steps:

1. Open the project folder in the code editor
2. Go into server folder and install the dependencies with `npm install` or `npm i`
3. Open Postgres (pgAdmin4) and create your local database (example: `product_manager`)
4. Open IPFS Desktop and use default configuration (gateway: 8080)
5. Return to your code editor and start the development server with `npm run start`. If you prefer to use `NODEMON` for automatic restarts in development mode, use `npm run start:dev`
6. Rename `.env.example` to `.env` and update DATABASE_URL with USERNAME, PASSWORD, and DATABASE_NAME as needed
7. Ensure the server remains running while using the app
8. Navigate to the smartContract folder to find the ProductManager.sol file, which contains the smart contract code. 

### Instructions for deploying the contract on Polygon Amoy, as Polygon Mumbai is deprecated:

9. Install the "Metamask" extension on your preferred browser and sign in or register
10. Load the smart contract into Remix IDE
11. Use the contract (written in Solidity) and compile it
12. Configure Metamask: add a new network and enter the required information for Amoy. Visit the official documentation for more details
13. Go to a faucet service for Polygon Amoy, such as Polygon Faucet; sign in with Discord, add your Wallet address, and request funds
14. In Remix, under the Deploy & Run Transactions section, select Injected Web3 and deploy the contract
15. Extract the contract information
16. Update the .env file with CONTRACT_ADDRESS, CONTRACT_ABI, and WEB3_PROVIDER

### How to test with a Front-end
17. Open a terminal in the client folder
18. Navigate to the product folder
19. Install the dependencies with `npm install` or `npm i`
20. Start the client with `npm run dev`


## API Endpoints
### Save Product
- **Endpoint:** `http://localhost:3000/products`
- **Method:** POST
- **Description:** Save product details and IPFS hash in the smart contract.

### Get all Products
- **Endpoint:** `http://localhost:3000/products`
- **Method:** GET
- **Description:**  Retrieve all products from the database.

### Retrieve File from IPFS
- **Endpoint:** `http://127.0.0.1:8080/ipfs/:hash`
- **Method:** GET
- **Description:**  Retrieve the file content from IPFS using the file hash.


## Environment Variables
- `DATABASE_URL`: URL for connecting to the PostgreSQL database.
- `WEB3_PROVIDER`: URL for the Web3 provider.
- `CONTRACT_ADDRESS`: Address of the deployed smart contract.
- `CONTRACT_ABI`: ABI of the smart contract for interacting with it.


## Error Handling
### Common Errors

- **500 Internal Server Error**
  - **Cause:** This error usually occurs due to issues with the server or the configuration.
  - **Solution:** Check the server logs for detailed error messages and ensure all services are running correctly.

- **400 Bad Request**
  - **Cause:** This error occurs when the request data is invalid or missing required fields.
  - **Solution:** Ensure that all required fields are provided in the request body and that the data is formatted correctly.


## Project Structure
- Client
    - client > product (main client app)
        - ... > src (main folder for client app)
            - ... > components (all app components)
                - ... > other (minor components, e.g., ErrorDialog)
            - ... > interface (TypeScript interfaces)
            - ... > api (API calls)
            - ... > functions (separeted functions)
            - ... > App.tsx (main app file)

- Server
    - server 
        - ... > prisma (Prisma ORM configuration)
        - ... > test (test contract folder)
        - ... > uploads (all uploads)
        - ... > src (main folder for server app)
            - ... > config (all configurations, including web3 configuration)
            - ... > controllers (operations such as creating products)
            - ... > middlewares 
            - ... > routes (product routes)
            - ... > services (services such as ipfs)
            - ... > app.js (main app file)
            - ... > prismaClient.js (local client for Prisma ORM)

## Author 
Vincenzo Saccone
