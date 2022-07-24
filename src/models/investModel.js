const connection = require('./connection');

const compra = async (cliente, ativo, qtdeComprada,) => {
    await connection.execute(
        `INSERT INTO investimentos.ativos_do_cliente (codCliente, codAtivo, qtdeAtivo) VALUES (?,?,?);`,
        [cliente, ativo, qtdeComprada],
    );

};

const updateCompraAtivo = async (novaQuantidade, ativo, cliente) => {
    await connection.execute(
        `UPDATE investimentos.ativos_do_cliente
        SET ativos_do_cliente.qtdeAtivo = ativos_do_cliente.qtdeAtivo + ?
        WHERE codAtivo = ?  AND codCliente = ?`, [novaQuantidade, ativo, cliente],
    );
};

const ativosDoCliente = async (ativo, cliente) => {
    const [ativos] = await connection.execute(
        `SELECT COUNT (*) AS registros FROM investimentos.ativos_do_cliente
    WHERE codAtivo = ? AND codCliente = ?;`, [ativo, cliente],
    );
    return ativos[0].registros
};

const quantidadeAtivoDisponivel = async (codAtivo) => {
    const [data] = await connection.execute(
        `SELECT codAtivo, quantidade FROM investimentos.ativos WHERE codAtivo = ?;`, [codAtivo],
    );
    return data
}

const updateQuantidadeAtivo = async (novaQuantidadeDisponivel, ativo) => {
    await connection.execute(
        `UPDATE investimentos.ativos
        SET ativos.quantidade = ativos.quantidade - ?
        WHERE codAtivo = ? `, [novaQuantidadeDisponivel, ativo]
    );
};


const quantidadeDisponivelVenda = async (codAtivo, codCliente) => {
    const [data] = await connection.execute(
        `SELECT  qtdeAtivo
        FROM investimentos.ativos_do_cliente WHERE codAtivo = ? AND codCliente = ?;`, [codAtivo, codCliente],
    );

    return data[0].qtdeAtivo;
};

const updateVenda = async (ativo, cliente, quantidadeVenda) => {

    await connection.execute(
        `UPDATE investimentos.ativos_do_cliente
        SET ativos_do_cliente.qtdeAtivo = ativos_do_cliente.qtdeAtivo - ?
        WHERE codAtivo = ? AND codCliente = ? `, [quantidadeVenda, ativo, cliente],
    );

};


module.exports = {
    compra,
    quantidadeAtivoDisponivel,
    updateQuantidadeAtivo,
    quantidadeDisponivelVenda,
    updateCompraAtivo,
    ativosDoCliente,
    updateVenda,
}