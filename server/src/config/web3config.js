import dotenv from 'dotenv';
import Web3 from 'web3';

dotenv.config({ path: '../.env' }); // load environment variables from .env

console.log('WEB3_PROVIDER:', process.env.WEB3_PROVIDER); 
console.log('CONTRACT_ADDRESS:', process.env.CONTRACT_ADDRESS);

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER)); // amoy testnet provider

const contractABI = JSON.parse(process.env.CONTRACT_ABI);

const contractAddress = process.env.CONTRACT_ADDRESS;

// Create a new contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };

// BE CAREFUL: at first i was using mumbai configuration, but i found out that it's deprecated
// we need to use another tesnet provider like "Polygon Amoy"