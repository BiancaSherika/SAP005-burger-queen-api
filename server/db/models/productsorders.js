const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    static associate(models) {
      ProductsOrders.belongsTo(models.Orders, {
        foreignKey: 'orderId',
      });
      ProductsOrders.belongsTo(models.Products, {
        foreignKey: 'productId',
      }); 
    }
  };
  ProductsOrders.init({
    orderId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Informar OrderId"
        }
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Informar ProductId"
        }
      }
    },
    qtd: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Informar Qtd"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};