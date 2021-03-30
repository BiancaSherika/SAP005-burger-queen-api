const data = require("../db/models")

class OrdersController {
  static async getOrders(__, res) {
    try {
      const orders = await data.Order.findAll();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async createOrder(req, res) {
    try {
      const newOrder = await data.Order.create(req.body);
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getOrderId(req, res) {
    const { id } = req.params
    try {
      const orderId = await data.Order.findAll({
        where: { id: Number(id) }
      })
      return res.status(200).json(orderId)
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  static async updateOrderId(req, res) {
    const { status } = req.body;
    const { id } = req.params
    try {
      await data.Order.update({ status }, {
        where: { id: Number(id) }
      })
      return res.status(201).json({ status: "pedido alterado com sucesso" })
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  static async deleteOrderId(req, res) {
    const { id } = req.params
    try {
      const orderId = await data.Order.destroy({
        where: { id: Number(id) }
      })
      return res.status(200).json({status: "pedido deletado com sucesso"})
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

}

module.exports = OrdersController;