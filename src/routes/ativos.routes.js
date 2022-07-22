const express = require('express');
const ativosRouter = express.Router();

const ativosController = require('../controllers/ativosController');

ativosRouter.get('/:codAtivo', ativosController.assetsByCodAtivo);



module.exports = {
    ativosRouter,
}