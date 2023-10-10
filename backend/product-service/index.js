const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./Product");

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000' ,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("product-service DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())

// GET PRODUCT
app.get("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCTS
app.get("/api/product/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Welcome route
app.get("/", (req, res) => {
  res.send("WELCOME TO PRODUCT-SERVICE");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Microservice "Product-service" running on port ${port}`);
});
