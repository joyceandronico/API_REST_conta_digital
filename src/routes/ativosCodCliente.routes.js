const express = require('express');
const ativosCodClienteRouter = express.Router();

const ativosController = require('../controllers/ativosController');

ativosCodClienteRouter.get('/:codCliente', ativosController.getByCodCliente);

module.exports = {
    ativosCodClienteRouter,
}