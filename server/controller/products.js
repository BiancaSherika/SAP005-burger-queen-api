const getProducts = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Products")
}

const getProductId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Product ID")
}

const creatProduct = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Creat Product")
}

const updateProductId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Update Product ID")
}

const deleteProductId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Delete Product ID")
}

module.exports = { getProducts, getProductId, creatProduct, updateProductId, deleteProductId }