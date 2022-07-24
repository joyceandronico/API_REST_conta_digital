const express = require('express');
const investRouter = express.Router();
const investController = require('../controllers/investControllers');



investRouter.post('/comprar', investController.quantidadeAtivoDisponivel, investController.compra, investController.updateCompraAtivo)


investRouter.post('/vender', investController.quantidadeDisponivelVenda, investController.updateVenda)

module.exports = {
    investRouter,
}