const connection = require('./connection');

const compra = async (cliente, ativo, qtde) => {
    const [query] = await connection.execute(
        `INSERT INTO investimentos.ativos_do_cliente (codCliente, codAtivo, qtdeAtivo) VALUES (?,?,?)`,
        [cliente, ativo, qtde],
    );
    return ({ id: query.id, codCliente: cliente, codAtivo: ativo, qtdeAtivo: qtde })
};

// const updateCompraAtivo = async()

module.exports = {
    compra,
}