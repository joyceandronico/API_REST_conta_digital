const mongoose = require('mongoose')

const cliente = new mongoose.Schema({
    codCliente: { type: Number, required: true, unique: true },
    saldo: { type: Number, required: true },
    ativos: [{
        qtdeAtivo: { type: Number },
        valorAtivo: { type: Number },
    }]
});

module.exports = mongoose.model('Cliente', cliente);
