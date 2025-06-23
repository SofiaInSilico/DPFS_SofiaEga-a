'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Andrea',
        last_name: 'Jiménez',
        email: 'andrea@example.com',
        address: 'Calle Falsa 123',
        password: 'hashed_password_1',
        role: 'admin'
      },
      {
        first_name: 'Carlos',
        last_name: 'López',
        email: 'carlos@example.com',
        address: 'Avenida Siempreviva 742',
        password: 'hashed_password_2',
        role: 'user'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
