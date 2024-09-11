# ProductManager---Blockchain

## Description
This backend application allows users to upload product details to a local IPFS instance. It stores the product information and the IPFS hash of the specifications file in a smart contract on the Polygon blockchain. The application provides API endpoints for interacting with the smart contract.

## Index
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

Want to read this in italian?
- [Italiano](README.it.md)


## Installation
To set up this project locally clone the repository -> `git clone ...`


## Usage
To use this project, ensure you have the following installed:
- A code editor (e.g., VS Code)
- PostgreSQL
- IPFS Desktop

Then, follow these steps:

1. Open the project folder in the code editor
2. Go into server folder and install the dependencies with `npm install` or `npm i`
3. Open Postgres (pgAdmin4) and create your local database (example: `product_manager`)
4. Open IPFS Desktop
5. Return to your code editor and start the development server with `npm run start`. If you prefer to use `NODEMON` for automatic restarts in development mode, use `npm run start:dev`
6. Rename `.env.example` to `.env` and update USERNAME, PASSWORD, and DATABASE_NAME as needed
7. Ensure the server remains running while using the app
8. Navigate to the smartContract folder to find the ProductManager.sol file, which contains the smart contract code. 


## Project Structure

## Author 
Vincenzo Saccone
