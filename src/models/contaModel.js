const connection = require('./connection');

const saldoCliente = async (codCliente) => {
    const [saldo] = await connection.execute(
        `SELECT codCliente, saldo FROM investimentos.clientes
        WHERE codCliente = ?`, [codCliente]
    );
    return saldo;
};

const saldoDisponivel = async (codCliente) => {
    const [data] = await connection.execute(
        `SELECT saldo FROM investimentos.clientes WHERE codCliente = ?;`, [codCliente],
    );
    return data
}

const saque = async (valorSaque, cliente) => {
    const [query] = await connection.execute(
        `INSERT INTO investimentos.saques (valor, codCliente) VALUES (?,?)`,
        [valorSaque, cliente],
    );
    return ({ id: query.id, valor: valorSaque, codCliente: cliente })
};

const updateSaldoSaque = async (novoSaldoDisponivel, cliente) => {
    await connection.execute(
        `UPDATE investimentos.clientes
        SET clientes.saldo = clientes.saldo - ?
        WHERE codCliente = ? `, [novoSaldoDisponivel, cliente]
    );
};

const deposito = async (valorDeposito, cliente) => {
    const [query] = await connection.execute(
        `INSERT INTO investimentos.depositos (valor, codCliente) VALUES (?,?)`,
        [valorDeposito, cliente],
    );
    return ({ id: query.id, valor: valorDeposito, codCliente: cliente })
};


module.exports = {
    saldoCliente,
    saque,
    updateSaldoSaque,
    deposito,
    saldoDisponivel,
};

