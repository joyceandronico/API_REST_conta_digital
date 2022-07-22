const connection = require('./connection');

const saldoCliente = async (codCliente) => {
    const [saldo] = await connection.execute(
        `SELECT * FROM investimentos.clientes
        WHERE codCliente = ?`, [codCliente]
    );

    return saldo;
};

const saque = async (valorSaque, cliente) => {
    const [query] = await connection.execute(
        `INSERT INTO investimentos.saques (valor, codCliente) VALUES (?,?)`,
        [valorSaque, cliente],
    );
    return ({ id: query.id, valor: valorSaque, codCliente: cliente })
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
    deposito,
};

