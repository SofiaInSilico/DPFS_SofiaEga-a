'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('order_items', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2
      },
      {
        order_id: 1,
        product_id: 3,
        quantity: 1
      },
      {
        order_id: 2,
        product_id: 2,
        quantity: 1
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('order_items', null, {});
  }
};
