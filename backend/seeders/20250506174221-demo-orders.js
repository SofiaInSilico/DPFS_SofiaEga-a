'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        user_id: 1,
        total_price: 20000.00,
        created_at: new Date()
      },
      {
        user_id: 2,
        total_price: 9500.00,
        created_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
