function getProducts(req, res) {
  const db = req.app.get("db");

  db.get_inventory()
    .then((inventory) => res.status(200).json(inventory))
    .catch(err => console.error(err));
}

function addProduct(req, res) {
  const db = req.app.get("db");
  const { name, price, img_url } = req.body

  db.create_product(name, price, img_url)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err));
}

function deleteProduct(req, res) {
  const { id } = req.params;
  const db = req.app.get("db");

  db.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err));
}

function editProduct(req, res) {
  const { img_url, name, price } = req.body;
  const { id } = req.params;
  const db = req.app.get("db");

  db.update_product(id, img_url, name, price)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err));
}

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct
}