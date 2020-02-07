const express = require("express");
const app = express()
const { getProducts, addProduct, deleteProduct, editProduct } = require("./controllers/products");

app
  .use(express.json())
  // .get('/api/products', getProducts)

app.listen(4000, () => console.log("It's over 4000!"));