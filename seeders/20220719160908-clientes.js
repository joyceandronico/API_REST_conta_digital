'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clientes',
      [{

        saldo: 235.70,
      },

      {

        saldo: 1240.45,
      },

      {

        saldo: 834.56,
      },

      {

        saldo: 75.09,
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
