const data = require("../db/models")

class OrdersController {
  static async getOrders(__, res) {
    try {
      let ordersList = await data.Orders.findAll({
        include: [{
          model: data.Products,
          as: 'products',
          required: false,
          attributes: [
            'id',
            'name',
            'flavor',
            'complement',
            'price',
            'type',
            'subType'
          ],
          through: {
            model: data.ProductsOrders,
            as: 'qtd',
            attributes: ['qtd']
          }
        }]
      })

      ordersList = JSON.parse(JSON.stringify(ordersList))

      const qtdOrder = ordersList.map((item) => {
        const qtdProduct = item.products.map((product) => ({
          ...product,
          qtd: product.qtd.qtd
        }))
        return {
        ...item,
        products: qtdProduct
        }
      });

      return res.status(200).json(qtdOrder);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
  static async createOrder(req, res) {
    try {
      const newOrder = await data.Orders.create(req.body);
      req.body.products.map(async (item) => {
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
      let getById = await data.Orders.findOne({
        where: { id: Number(id) },
        include: [{
          model: data.Products,
          as: 'products',
          attributes: [
            'id',
            'name',
            'flavor',
            'complement',
            'price',
            'type',
            'subType'
          ],
          through: {
            model: data.ProductsOrders,
            as: 'qtd',
            attributes: ['qtd']
          }
        }]
      })

      getById = getById.toJSON()

      const qtdProduct = getById.products.map((item) => ({
        ...item,
        qtd: item.qtd.qtd
      }))

      const result = {
        ...getById,
        products: qtdProduct
      }

      return res.status(200).json(result)
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
      return res.status(200).json("pedido alterado com sucesso")
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
      return res.status(200).json("pedido deletado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

}

module.exports = OrdersController;