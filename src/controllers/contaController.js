const contaService = require('../services/contaService');

const saldoCliente = async (req, res, next) => {
    const { codCliente } = req.params;
    const saldoCodCliente = await contaService.saldoCliente(codCliente);

    try {
        if (!saldoCodCliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' })
        };
        return res.status(200).json(saldoCodCliente);

    } catch (error) {
        next(error)
    };
};

const saque = async (req, res, next) => {
    const { valor, codCliente } = req.body;
    try {
        const novoSaque = await contaService.saque(valor, codCliente);
        return res.status(201).json(novoSaque);
    } catch (error) {
        next(error);
    };
};


module.exports = {
    saldoCliente,
    saque,
}

