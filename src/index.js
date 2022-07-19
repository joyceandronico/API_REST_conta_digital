const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./middlewares/error');
const { investRouter } = require('./routes/investimentos.routes');
const { ativosRouter } = require('./routes/ativos.routes');
const { contasRouter } = require('./routes/contas.routes');

const app = express();

app.use(bodyParser.json());

app.use('/investimentos', investRouter);
app.use('/ativos', ativosRouter);
app.use('/contas', contasRouter);



app.listen(3000, () => {
    console.log('ouvindo a porta 3000')
});

app.use(errorMiddleware);

