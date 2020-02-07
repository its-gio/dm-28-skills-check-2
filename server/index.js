const dotenv = require("dotenv").config();
const massive = require("massive");
const express = require("express");
const app = express();
const { getProducts, addProduct, deleteProduct, editProduct } = require("./controllers/products");
const { SERVER_PORT, CONECTION_STRING } = process.env;

massive(CONECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.error(err));

app
  .use(express.json())
  .get('/api/inventory', getProducts)
  .post('/api/inventory', addProduct)
  .delete('/api/inventory/:id', deleteProduct)
  .put('/api/inventory/:id', editProduct)

app.listen(SERVER_PORT, () => console.log(`It's over ${SERVER_PORT}!`));