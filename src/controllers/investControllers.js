const investService = require('../services/investServices');

const compra = async (req, res, next) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
    try {
        const novaCompra = await investService.compra(codCliente, codAtivo, qtdeAtivo);
        return res.status(201).json(novaCompra);
    } catch (error) {
        next(error);
    };
};

module.exports = {
    compra,
}