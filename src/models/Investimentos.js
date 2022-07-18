const mongoose = require('mongoose')

const investSchema = new mongoose.Schema({
    codAtivo: { type: Number, required: true },
    qteDisponivelAtivo: { type: Number, required: true },
    valor: { type: Number, required: true },
});


module.exports = mongoose.model('Ativo', investSchema)


