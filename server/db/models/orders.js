'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Products, {
        through: 'ProductsOrder',
        as: 'products',
        foreignKey: 'order_id',
        otherKey: 'product_id',
      });

      Order.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
    }
  };
  
  Order.init({
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    }}, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};