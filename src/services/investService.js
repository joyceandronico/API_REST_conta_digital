const investModel = require('../models/investModel');

const assetsByCodAtivo = async (codAtivo) => {
    const ativo = await investModel.assetsByCodAtivo(codAtivo);
    if (!ativo) {
        return null;
    }
    return ativo;
};

module.exports = {
    assetsByCodAtivo,
};