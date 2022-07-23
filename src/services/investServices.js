const investModel = require('../models/investModel');

const compra = async (codCliente, codAtivo, qtdeAtivo) => {
    const novaCompra = await investModel.compra(codCliente, codAtivo, qtdeAtivo);
    return novaCompra
}

const quantidadeAtivoDisponivel = async (codAtivo) => {
    const quantidadeDisponivel = await investModel.quantidadeAtivoDisponivel(codAtivo);
    return quantidadeDisponivel;
}


const updateCompraAtivo = async (codAtivo, quantidade) => {
    const qtdeAtualizada = await investModel.updateQuantidadeAtivo(codAtivo, quantidade);
    return qtdeAtualizada;
};




module.exports = {
    compra,
    quantidadeAtivoDisponivel,
    updateCompraAtivo,
};

