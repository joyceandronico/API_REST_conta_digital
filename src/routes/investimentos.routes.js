const express = require('express');
const investRouter = express.Router();
const investController = require('../controllers/investControllers');
const validation = require('../middlewares/validations');



investRouter.post('/comprar', investController.quantidadeAtivoDisponivel, investController.compra, investController.updateCompraAtivo)


investRouter.post('/vender', async (req, res) => {
    res.status(201).json({ message: 'venda efetuada com sucesso' });
});

module.exports = {
    investRouter,
}