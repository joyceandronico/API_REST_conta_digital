'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    saldo: DataTypes.number,

  }, {
    tableName: 'clientes'
  });

  return Clientes;
};