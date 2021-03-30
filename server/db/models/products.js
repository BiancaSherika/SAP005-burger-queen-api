'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsToMany(models.Order, {
        through: 'ProductsOrder',
        as: 'orders',
        foreignKey: 'product_id',
        otherKey: 'order_id',
      });
    }
  };
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};