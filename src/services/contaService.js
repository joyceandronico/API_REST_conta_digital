const contaModel = require('../models/contaModel');

const saldoCliente = async (codCliente) => {
    const saldoCodCliente = await contaModel.saldoCliente(codCliente);
    if (!saldoCodCliente) {
        return { message: 'Cliente não encontrado' };
    }
    return saldoCodCliente;
};

module.exports = {
    saldoCliente,
}