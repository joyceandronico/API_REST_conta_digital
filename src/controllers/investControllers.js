const investService = require('../services/investServices');

const quantidadeAtivoDisponivel = async (req, res, next) => {
    const { codAtivo, quantidade } = req.body;
    try {
        const novaQuantidadeDisponivel = await investService.quantidadeAtivoDisponivel(codAtivo);
        if (novaQuantidadeDisponivel[0].quantidade < quantidade) {
            return res.status(400).json({ message: 'compra não permitida' })
        }
        next();

    } catch (error) {
        next(error);
    }
}

const compra = async (req, res, next) => {
    const { codCliente, codAtivo, quantidade } = req.body;
    try {
        await investService.compra(codCliente, codAtivo, quantidade);

        next()
    } catch (error) {
        next(error);
    };
};

const updateCompraAtivo = async (req, res, next) => {
    try {
        const { codAtivo, quantidade } = req.body;
        await investService.updateCompraAtivo(codAtivo, quantidade);
        return res.status(201).json({ message: 'compra efetuada' });
    } catch (error) {
        next(error);
    }
};

const quantidadeDisponivelVenda = async (req, res, next) => {
    const { codAtivo, quantidade, codCliente } = req.body;
    console.log(req.body)
    try {
        const quantidadeDisponivel = await investService.quantidadeDisponivelVenda(codAtivo, codCliente);
        console.log(quantidadeDisponivel)
        if (quantidadeDisponivel < quantidade) {
            return res.status(400).json({ message: 'venda não permitida' });
        }

        next();


    } catch (error) {
        next(error);
    };
};

const updateVenda = async (req, res, next) => {
    const { codCliente, codAtivo, quantidade } = req.body;
    try {
        await investService.updateVenda(codCliente, codAtivo, quantidade);

        return res.status(200).json({ message: 'venda efetuada' });

    } catch (error) {
        next(error);
    };
};




module.exports = {
    compra,
    quantidadeAtivoDisponivel,
    updateCompraAtivo,
    quantidadeDisponivelVenda,
    updateVenda,

}

