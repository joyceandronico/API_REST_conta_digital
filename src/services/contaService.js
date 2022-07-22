const contaModel = require('../models/contaModel');

const saldoCliente = async (codCliente) => {
    const saldoCodCliente = await contaModel.saldoCliente(codCliente);
    if (!saldoCodCliente) {
        return { message: 'Cliente não encontrado' };
    }
    return saldoCodCliente;
};

const saque = async (valor, codCliente) => {
    const novoSaque = await contaModel.saque(valor, codCliente);
    return novoSaque;
};

module.exports = {
    saldoCliente,
    saque,
}