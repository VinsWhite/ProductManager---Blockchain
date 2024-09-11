import fs from "fs";
import prisma from "../prismaClient.js";
import ipfs from "../services/ipfsService.js";

// function to create products
export const createProduct = async (req, res) => {
  try {
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
