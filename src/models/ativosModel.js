const connection = require('./connection');

const assetsByCodAtivo = async (codAtivo) => {
    const [ativo] = await connection.execute(
        'SELECT * FROM investimentos.ativos WHERE codAtivo = ?',
        [codAtivo],
    );

    return ativo;
};

const getByCodCliente = async (codCliente) => {
    const [data] = await connection.execute(
        `
        SELECT atCliente.codCliente,  atCliente.codAtivo, atCliente.qtdeAtivo, ativos.valor
        FROM investimentos.ativos_do_cliente AS atCliente
        JOIN investimentos.ativos AS ativos ON ativos.codAtivo = atCliente.codAtivo
        WHERE atCliente.codCliente = ?`, [codCliente],
    );
    return data;
};

module.exports = {
    assetsByCodAtivo,
    getByCodCliente,
};

