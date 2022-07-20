'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ativos = sequelize.define('Ativos', {
    valor: DataTypes.REAL(10, 2),
    quantidade: DataTypes.INTEGER,

  });

  return Ativos;
};