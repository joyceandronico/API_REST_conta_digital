const connection = require('./connection');

const saldoCliente = async (codCliente) => {
    const [saldo] = await connection.execute(
        `SELECT * FROM investimentos.clientes
        WHERE codCliente = ?`, [codCliente]
    );

    return saldo;
};


module.exports = {
    saldoCliente,
}

