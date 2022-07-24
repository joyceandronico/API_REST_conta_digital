const ativosService = require('../services/ativosService');

const assetsByCodAtivo = async (req, res, next) => {
    const { codAtivo } = req.params;

    try {
        const ativo = await ativosService.assetsByCodAtivo(codAtivo);
        if (!ativo) {
            return res.status(404).json({ message: 'Ativo não encontrado' });
        }
        return res.status(200).json(ativo);
    } catch (error) {
        next(error);
    }
};

const getByCodCliente = async (req, res, next) => {
    const { codCliente } = req.params;
    const infoCliente = await ativosService.getByCodCliente(codCliente);

    try {
        if (!infoCliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' })
        };
        return res.status(200).json(infoCliente);

    } catch (error) {
        next(error)
    };
}

module.exports = {
    assetsByCodAtivo,
    getByCodCliente,
}