function getProducts(req, res) {
  const db = req.app.get("db");

  db.get_inventory()
    .then(inventory => res.status(200).json(inventory));
}

function addProduct(req, res) {

}

function deleteProduct(req, res) {

}

function editProduct(req, res) {

}

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct
}