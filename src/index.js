const express = require('express');
require('express-async-errors');
const { errorMiddleware } = require('./middlewares/error');
const { investRouter } = require('./routes/investimentos.routes');
const { ativosRouter } = require('./routes/ativos.routes');
const { contasRouter } = require('./routes/contas.routes');
const { ativosCodClienteRouter } = require('./routes/ativosCodCliente.routes')

const app = express();

app.use(express.json());

app.use('/investimentos', investRouter);
app.use('/ativos', ativosRouter);
app.use('/ativos/codCliente', ativosCodClienteRouter)
app.use('/contas', contasRouter);




app.listen(3000, () => {
    console.log('ouvindo a porta 3000')
});

app.use(errorMiddleware);

