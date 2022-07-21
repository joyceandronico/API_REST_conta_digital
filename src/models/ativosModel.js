const connection = require('./connection');

const assetsByCodAtivo = async (codAtivo) => {
    const [data] = await connection.execute(
        'SELECT * FROM investimentos.ativos WHERE codAtivo = ?',
        [codAtivo],
    );
    const ativo = data[0];
    return ativo;
};

module.exports = {
    assetsByCodAtivo,
};

