const express = require('express');
const investRouter = express.Router();



investRouter.post('/investimentos/comprar', async (req, res) => {
    res.status(201).json({ message: 'compra gerada com sucesso' });
});





module.exports = {
    investRouter,
}