'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING
        allowNull: false,
      },
      flavor: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
        allowNull: false,
      },
      subtype: {
        type: Sequelize.STRING
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};