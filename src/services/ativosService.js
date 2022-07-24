const ativosModel = require('../models/ativosModel');

const assetsByCodAtivo = async (codAtivo) => {
    const ativo = await ativosModel.assetsByCodAtivo(codAtivo);
    if (!ativo) {
        return null;
    }
    return ativo;
};

const getByCodCliente = async (codCliente) => {
    const infoCliente = await ativosModel.getByCodCliente(codCliente);
    const infoByCodCliente = infoCliente.map((info) => {
        const { codCliente, codAtivo, valor, qtdeAtivo } = info;
        return { codCliente, codAtivo, valor, qtdeAtivo };
    });
    if (!infoCliente) {
        return null;
    }
    return infoByCodCliente;
};

module.exports = {
    assetsByCodAtivo,
    getByCodCliente,
};