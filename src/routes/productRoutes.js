import express from "express";
import { createProduct } from "../controllers/productController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router(); // i need this to use the express router system

router.post("/", upload.single("specifications"), createProduct); // this route is use to post files

export default router;
