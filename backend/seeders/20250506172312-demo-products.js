'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Agenda Restauración',
        price: 12000.00,
        image: 'https://example.com/img/restauracion.jpg',
        stock: 50,
        category_id: 1
      },
      {
        name: 'Agenda Antropología',
        price: 9500.00,
        image: 'https://example.com/img/antropologia.jpg',
        stock: 30,
        category_id: 1
      },
      {
        name: 'Libreta croquis',
        price: 8000.00,
        image: 'https://example.com/img/croquis.jpg',
        stock: 100,
        category_id: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
