const express = require('express');
const contasRouter = express.Router();
const contaController = require('../controllers/contaController');

contasRouter.post('/deposito', async (req, res) => {
    res.status(200).json({ message: 'deposito efetuado com sucesso' });
});

contasRouter.post('/saque', async (req, res) => {
    res.status(200).json({ message: 'saque efetuado com sucesso' });
});

contasRouter.get('/:codCliente', contaController.saldoCliente);



module.exports = {
    contasRouter,
}