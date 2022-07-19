'use strict';

module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    saldo: DataTypes.REAL(10, 2),

  }, {
    tableName: 'clientes'
  });

  return Clientes;
};