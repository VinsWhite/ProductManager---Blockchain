import fs from "fs";
import prisma from "../prismaClient.js";
import ipfs from "../services/ipfsService.js";

// function to create products
export const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = fs.readFileSync(req.file.path);
    const result = await ipfs.add(file);
    const ipfsHash = result.path;

    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        ipfsHash: ipfsHash,
        timestamp: new Date(),
      },
    });

    res.status(201).json({ product });
  } catch (error) {
    console.error('Error in createProduct:', error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

// get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        timestamp: 'desc',
      },
    });

    res.status(200).json({ products });
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
