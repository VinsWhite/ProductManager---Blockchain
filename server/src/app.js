import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// configuration CORS
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json()); // to use json file
app.use(express.urlencoded({ extended: true })); // parses URL-encoded data (e.g., from HTML forms) and makes it available in req.body

// Main Route
app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// in this case we're using http://localhost:3000/products

export default app;
