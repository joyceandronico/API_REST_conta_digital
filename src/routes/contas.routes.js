const express = require('express');
const contasRouter = express.Router();
const contaController = require('../controllers/contaController');


contasRouter.post('/deposito', contaController.deposito);

contasRouter.post('/saque', contaController.saldoDisponivel, contaController.saque, contaController.updateSaldoSaque);

contasRouter.get('/:codCliente', contaController.saldoCliente);



module.exports = {
    contasRouter,
}