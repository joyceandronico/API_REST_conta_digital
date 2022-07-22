const express = require('express');
const contasRouter = express.Router();
const contaController = require('../controllers/contaController');
const validation = require('../middlewares/validations');

contasRouter.post('/deposito', validation.depositoValido, contaController.deposito,);

contasRouter.post('/saque', contaController.saque);

contasRouter.get('/:codCliente', contaController.saldoCliente);



module.exports = {
    contasRouter,
}