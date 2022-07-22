const investModel = require('../models/investModel');

const compra = async (codCliente, codAtivo, qtdeAtivo) => {
    const novaCompra = await investModel.compra(codCliente, codAtivo, qtdeAtivo);
    return novaCompra;
};

module.exports = {
    compra,
}