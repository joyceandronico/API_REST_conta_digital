const connection = require('./connection');

const compra = async (cliente, ativo, qtdeComprada,) => {
    const [query] = await connection.execute(
        `INSERT INTO investimentos.ativos_do_cliente (codCliente, codAtivo, qtdeAtivo) VALUES (?,?,?);`,
        [cliente, ativo, qtdeComprada],
    );
    return ({ id: query.id, codCliente: cliente, codAtivo: ativo, qtdeAtivo: qtdeComprada, })
};


const quantidadeAtivoDisponivel = async (codAtivo) => {
    const [data] = await connection.execute(
        `SELECT codAtivo, quantidade FROM investimentos.ativos WHERE codAtivo = ?;`, [codAtivo],


    );
    return data
}



const updateQuantidadeAtivo = async (ativo, novaQuantidadeDisponivel) => {
    await connection.execute(
        `UPDATE investimentos.ativos
        SET ativos.quantidade = ativos.quantidade - ?
        WHERE codAtivo = ? `, [novaQuantidadeDisponivel, ativo]

    );

};


module.exports = {
    compra,
    quantidadeAtivoDisponivel,
    updateQuantidadeAtivo,
}