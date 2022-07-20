const express = require('express');
const contasRouter = express.Router();

contasRouter.post('/deposito', async (req, res) => {
    res.status(200).json({ message: 'deposito efetuado com sucesso' });
});

contasRouter.post('/saque', async (req, res) => {
    res.status(200).json({ message: 'saque efetuado com sucesso' });
});

contasRouter.get('/:codCliente', async (req, res) => {
    res.status(200).json({ message: 'saldo do cliente' });
});



module.exports = {
    contasRouter,
}