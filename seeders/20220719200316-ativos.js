'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Ativos',
      [{
        valor: 18.70,
        quantidade: 100
      },

      {
        valor: 8.22,
        quantidade: 92,
      },
      {
        valor: 55.30,
        quantidade: 12,
      },
      {
        valor: 13.59,
        quantidade: 7,
      },
      {
        valor: 102.49,
        quantidade: 8,
      },

      ],
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Ativos', null, {});

  }
};
