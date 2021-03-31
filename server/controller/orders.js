const data = require("../db/models")

class OrdersController {
  static async getOrders(__, res) {
    try {
      const allOrders = await data.Order.findAll({
        include: [{
          model: data.Products,
          as: 'products',
          required: false,
          attributes: [
            'id',
            'name',
            'flavor',
            'complement',
            'type',
            'subtype',
            'price'
          ],
          through: {
            model: data.ProductsOrders,
            as: 'ProductsOrders',
            attributes: ['qtd']
          }
        }]
      });
      return res.status(200).json(allOrders);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async createOrder(req, res) {
    try {
      const newOrder = await data.Order.create(req.body);
      const productsOrder = req.body.products.map(async(item) => {
        const product = await data.Products.findByPk(item.product_id);
        if (!product) {
          return res.status(400).json("Produto não encontrado");
        }
        const productOrder = {
          order_id: newOrder.id,
          product_id: item.product_id,
          qtd: item.qtd
        }
        await data.ProductsOrder.create(productOrder);
      })
      return res.status(201).json(newOrder);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async getOrderId(req, res) {
    const { id } = req.params
    try {
      const orderId = await data.Order.findAll({
        where: { id: Number(id) }
      })
      return res.status(200).json(orderId)
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async updateOrderId(req, res) {
    const { status } = req.body;
    const { id } = req.params
    try {
      await data.Order.update({ status }, {
        where: { id: Number(id) }
      })
      return res.status(201).json("pedido alterado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async deleteOrderId(req, res) {
    const { id } = req.params
    try {
      const orderId = await data.Order.destroy({
        where: { id: Number(id) }
      })
      return res.status(200).json("pedido deletado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

}

module.exports = OrdersController;