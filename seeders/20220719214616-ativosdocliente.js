'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ativos-do-cliente',
      [
        {
          codCliente: 49,
          codAtivo: 7
        },
        {
          codCliente: 50,
          codAtivo: 8
        },
        {
          codCliente: 51,
          codAtivo: 9
        },
        {
          codCliente: 52,
          codAtivo: 10
        },
        {
          codCliente: 53,
          codAtivo: 11
        },
        {
          codCliente: 54,
          codAtivo: 12
        },
        {
          codCliente: 55,
          codAtivo: 13
        },
        {
          codCliente: 56,
          codAtivo: 14
        },
        {
          codCliente: 57,
          codAtivo: 15
        },
        {
          codCliente: 58,
          codAtivo: 16
        },
        {
          codCliente: 59,
          codAtivo: 17
        },
        {
          codCliente: 60,
          codAtivo: 18
        },
        {
          codCliente: 49,
          codAtivo: 19
        },
        {
          codCliente: 50,
          codAtivo: 20
        },
        {
          codCliente: 51,
          codAtivo: 21
        },
        {
          codCliente: 52,
          codAtivo: 7
        },
        {
          codCliente: 53,
          codAtivo: 8
        },
        {
          codCliente: 54,
          codAtivo: 9
        },
        {
          codCliente: 55,
          codAtivo: 10
        },
        {
          codCliente: 56,
          codAtivo: 11
        },


      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ativosdocliente', null, {});
  },
};
