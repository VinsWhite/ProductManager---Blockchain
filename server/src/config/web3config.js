import dotenv from 'dotenv';
import Web3 from 'web3';

dotenv.config(); // load environment variables from .env

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER)); // Mumbai testnet provider

const contractABI = JSON.parse(process.env.CONTRACT_ABI);

const contractAddress = process.env.CONTRACT_ADDRESS;

// Create a new contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };
