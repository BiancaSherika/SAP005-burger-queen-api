const data = require("../db/models")

class OrdersController {
  static async getOrders(__, res) {
    try {
      const allOrders = await data.Orders.findAll({
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
            'subType',
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
      const newOrder = await data.Orders.create(req.body);
      const productsOrder = req.body.products.map(async(item) => {
        const product = await data.Products.findByPk(item.productId);
        if (!product) {
          return res.status(400).json("Produto não encontrado");
        }
        const productOrder = {
          orderId: newOrder.id,
          productId: item.productId,
          qtd: item.qtd
        }
        await data.ProductsOrders.create(productOrder);
      })
      return res.status(201).json(newOrder);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async getOrderId(req, res) {
    const { id } = req.params
    try {
      const orderId = await data.Orders.findAll({
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
      await data.Orders.update({ status }, {
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
      await data.Orders.destroy({
        where: { id: Number(id) }
      })
      return res.status(201).json("pedido deletado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

}

module.exports = OrdersController;