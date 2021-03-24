const getOrders = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Orders")
}

const getOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Order ID")
}

const creatOrder = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Creat Order")
}

const updateOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Update Order ID")
}

const deleteOrderId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Delete Order ID")
}

module.exports = { getOrders, getOrderId, creatOrder, updateOrderId, deleteOrderId }