const mongoose = require('mongoose')

const ativo = new mongoose.Schema({
    codAtivo: { type: Number, required: true, unique: true },
    qtdeAtivo: { type: Number, required: true },
    valor: { type: Number, required: true },
});


module.exports = mongoose.model('Ativo', ativo);




