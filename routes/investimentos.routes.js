const express = require('express');
const investRouter = express.Router();



investRouter.post('/comprar', async (req, res) => {
    res.status(201).json({ message: 'compra gerada com sucesso' });
});

investRouter.post('/vender', async (req, res) => {
    res.status(201).json({ message: 'venda efetuada com sucesso' });
});

module.exports = {
    investRouter,
}