const ativosModel = require('../models/ativosModel');

const assetsByCodAtivo = async (codAtivo) => {
    const ativo = await ativosModel.assetsByCodAtivo(codAtivo);
    if (!ativo) {
        return null;
    }
    return ativo;
};

module.exports = {
    assetsByCodAtivo,
};