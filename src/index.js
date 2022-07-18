const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./middlewares/error');
const mongoose = require('mongoose')
const url = 'mongodb+srv://joyce_and:ACGK1wrDshiOrBP1@desafioxp.eyycz.mongodb.net/investimentos?retryWrites=true&w=majority'
const { investRouter } = require('./routes/investimentos.routes');
const { ativosRouter } = require('./routes/ativos.routes');
const { contasRouter } = require('./routes/contas.routes');

const app = express();

app.use(bodyParser.json());

app.use('/investimentos', investRouter);
app.use('/ativos', ativosRouter);
app.use('/contas', contasRouter);


mongoose.connect(url).then(() => {
    console.log('conectado ao mongodb!')
    app.listen(3000);
})
    .catch((err) => {
        app.use(errorMiddleware);
    })

