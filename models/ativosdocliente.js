'use strict';

const Cliente = sequelize.define('Cliente', { name: DataTypes.INTEGER });
const Ativo = sequelize.define('Ativo', { name: DataTypes.INTEGER });
const AtivoDoCliente = sequelize.define('AtivoDoCliente', {
  codCliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,
      key: 'codCliente'
    }
  },
  codAtivo: {
    type: DataTypes.INTEGER,
    references: {
      model: Ativo,
      key: 'codAtivo'
    }
  }
});
Cliente.belongsToMany(Ativo, { through: AtivoDoCliente });
Ativo.belongsToMany(Cliente, { through: AtivoDoCliente });