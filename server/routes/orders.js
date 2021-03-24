const { Router } = require('express')
const ordersController = require('../controller/orders')

const ordersRouter = Router()

ordersRouter.get('/', ordersController.getOrders)
ordersRouter.get('/:id', ordersController.getOrderId) 
ordersRouter.post('/', ordersController.creatOrder)
ordersRouter.put('/:id', ordersController.updateOrderId)
ordersRouter.delete('/:id', ordersController.deleteOrderId)

module.exports = ordersRouter