// this space is use to test the deployed contract

import { web3, contract } from '../src/config/web3config.js';

async function testContract() {
    try {
        // funds of the smart contract
        const productCount = await contract.methods.productCount().call();
        console.log('Product Count:', productCount);

        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts); // available accounts

        if (accounts.length === 0) {
            throw new Error('No accounts found. Make sure your provider is configured correctly.');
        }

        // to add a product
        const response = await contract.methods.addProduct(
            'Sample Product',
            'This is a sample product description',
            1000,
            'QmHashOfSpecificationsFile' // Hash IPFS
        ).send({ from: accounts[0] });
        
        console.log('Transaction Hash:', response.transactionHash);

        // take product detail
        const productDetails = await contract.methods.getProduct(1).call();
        console.log('Product Details:', productDetails);

    } catch (error) {
        console.error('Error:', error);
    }
}

testContract();
