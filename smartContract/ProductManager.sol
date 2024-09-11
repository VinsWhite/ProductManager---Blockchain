pragma solidity ^0.8.0;

contract ProductManager {
    // struct to represent a Product with name, description, price, and IPFS hash
    struct Product {
        string name;
        string description;
        uint256 price;
        string ipfsHash;
    }

    // mapping to store products by their ID
    mapping(uint256 => Product) public products;
    // counter to keep track of the number of products
    uint256 public productCount;

    // function to add a new product to the contract
    function addProduct(
        string memory _name,
        string memory _description, 
        uint256 _price, 
        string memory _ipfsHash
    ) public {
        // store the new product in the mapping and increment the product count
        products[productCount] = Product(_name, _description, _price, _ipfsHash);
        productCount++;
    }

    // function to retrieve product details by ID
    function getProduct(uint256 _id) public view returns (
        string memory, 
        string memory, 
        uint256, 
        string memory
    ) {
        // fetch the product from the mapping
        Product memory product = products[_id];
        return (product.name, product.description, product.price, product.ipfsHash);
    }
}
