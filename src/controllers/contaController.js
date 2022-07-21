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
}


module.exports = {
    saldoCliente,
}

