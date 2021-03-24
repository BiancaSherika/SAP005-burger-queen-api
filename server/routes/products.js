const { Router } = require('express')
const productsController = require('../controller/products')

const productsRouter = Router()

productsRouter.get("/", productsController.getProducts)
productsRouter.get("/:id", productsController.getProductId)
productsRouter.post("/", productsController.creatProduct)
productsRouter.put("/:id", productsController.updateProductId)
productsRouter.delete("/:id", productsController.deleteProductId)

module.exports = productsRouter