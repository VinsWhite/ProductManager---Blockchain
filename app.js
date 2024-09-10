const express = require("express");
const multer = require("multer");
const { create } = require("ipfs-core");
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const fs = require("fs");

const app = express(); // main app
const prisma = new PrismaClient(); // to use Prisma services
const ipfs = create();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/products", upload.single("specifications"), async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
