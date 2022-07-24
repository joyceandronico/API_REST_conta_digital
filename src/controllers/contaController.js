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
        next();
        return res.status(201).json({ message: `saque de ${novoSaque.valor} efetuado!` });
    } catch (error) {
        next(error);
    };
};

const saldoDisponivel = async (req, res, next) => {
    const { codCliente, valor } = req.body;
    try {
        const saldoDisponivel = await contaService.saldoDisponivel(codCliente);
        if (saldoDisponivel[0].saldo < valor) {
            return res.status(400).json({ message: 'saque não permitido' })
        }
        next()
    } catch (error) {
        next(error);
    }
}

const updateSaldoSaque = async (req, _res, next) => {
    try {
        const { valor, codCliente } = req.body;
        await contaService.updateSaldoSaque(valor, codCliente);
    } catch (error) {
        next(error);
    }
};

const deposito = async (req, res, next) => {
    const { valor, codCliente } = req.body;
    try {
        const novoDeposito = await contaService.deposito(valor, codCliente);
        if (valor <= 0) {
            return res.status(400).json({ message: 'valor inválido' })
        }
        next()
        return res.status(201).json({ message: `depósito de ${novoDeposito.valor} efetuado` });
    } catch (error) {
        next(error);
    };
};



module.exports = {
    saldoCliente,
    saque,
    deposito,
    updateSaldoSaque,
    saldoDisponivel,
}

