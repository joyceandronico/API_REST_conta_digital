const express = require('express');
const investRouter = express.Router();
const investController = require('../controllers/investControllers');



investRouter.post('/comprar', investController.compra);

investRouter.post('/vender', async (req, res) => {
    res.status(201).json({ message: 'venda efetuada com sucesso' });
});

module.exports = {
    investRouter,
}