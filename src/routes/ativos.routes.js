const express = require('express');
const ativosRouter = express.Router();

const ativosController = require('../controllers/ativosController');

// ativosRouter.get('/:codCliente', async (_req, res) => {
//     res.status(200).json({ message: 'codCliente' });
// });

ativosRouter.get('/:codAtivo', ativosController.assetsByCodAtivo);



module.exports = {
    ativosRouter,
}