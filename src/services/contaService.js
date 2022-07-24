const contaModel = require('../models/contaModel');

const saldoCliente = async (codCliente) => {
    const saldoCodCliente = await contaModel.saldoCliente(codCliente);
    if (!saldoCodCliente) {
        return { message: 'Cliente não encontrado' };
    }
    return saldoCodCliente;
};

const saldoDisponivel = async (codCliente) => {
    const saldoDisponivel = await contaModel.saldoDisponivel(codCliente);
    return saldoDisponivel
};

const saque = async (valor, codCliente) => {
    const novoSaque = await contaModel.saque(valor, codCliente);
    return novoSaque;
};

const deposito = async (valor, codCliente) => {
    const novoDeposito = await contaModel.deposito(valor, codCliente);
    return novoDeposito;
};

const updateSaldoSaque = async (novoSaldoDisponivel, cliente) => {
    const novoSaldo = await contaModel.updateSaldoSaque(novoSaldoDisponivel, cliente);
    return novoSaldo;
};


module.exports = {
    saldoCliente,
    saque,
    deposito,
    updateSaldoSaque,
    saldoDisponivel,
}