const data = require("../db/models")

class ProductsController {
  static async getProducts(__, res) {
    try {
      const allProducts = await data.Products.findAll();
      return res.status(200).json(allProducts);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err.message);
    }
  }

  static async createProduct(req, res) {
    const newProduct = req.body;
    try {
      const createdProduct = await data.Products.create(newProduct);
      return res.status(201).json(createdProduct)
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async getProductId(req, res) {
    const { id } = req.params
    try {
      const getById = await data.Products.findAll({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(getById)
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async updateProductId(req, res) {
    const { id } = req.params
    try {
       await data.Products.update(
        { price: req.body.price, image: req.body.image }, {
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json("produto alterado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async deleteProductId(req, res) {
    const { id } = req.params
    try {
      await data.Products.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json("produto deletado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }


}

module.exports = ProductsController