const investModel = require('../models/investModel');

const compra = async (codCliente, codAtivo, qtdeAtivo) => {
    const quantidadeDeRegistros = await investModel.ativosDoCliente(codAtivo, codCliente)

    if (quantidadeDeRegistros) {

        await investModel.updateCompraAtivo(qtdeAtivo, codAtivo, codCliente);

    } else {

        await investModel.compra(codCliente, codAtivo, qtdeAtivo);
    };
};

const quantidadeAtivoDisponivel = async (codAtivo) => {
    const quantidadeDisponivel = await investModel.quantidadeAtivoDisponivel(codAtivo);
    return quantidadeDisponivel;
}


const updateCompraAtivo = async (codAtivo, quantidade) => {
    const qtdeAtualizada = await investModel.updateQuantidadeAtivo(codAtivo, quantidade);
    return qtdeAtualizada;
};

const updateVenda = async (codCliente, codAtivo, qtdeAtivo) => {
    const novaVenda = await investModel.updateVenda(codCliente, codAtivo, qtdeAtivo);
    return novaVenda
};

const quantidadeDisponivelVenda = async (codCliente, codAtivo) => {
    const quantidadeDisponivel = await investModel.quantidadeDisponivelVenda(codAtivo, codCliente)
    return quantidadeDisponivel;

};








module.exports = {
    compra,
    quantidadeAtivoDisponivel,
    updateCompraAtivo,
    updateVenda,
    quantidadeDisponivelVenda,

};

