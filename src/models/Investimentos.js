const mongoose = require('mongoose')

const investSchema = new mongoose.Schema({
    codCliente: { type: Number, required: true },
    codAtivo: { type: Number, required: true },
    qteAtivo: { type: Number, required: true },
    valor: { type: Number, required: true },
});

module.exports = mongoose.model('Investimento', investSchema)

