'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Orders',
      'processedAt',
      Sequelize.STRING
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Orders',
      'processedAt',
      Sequelize.STRING
    );
  },
}
