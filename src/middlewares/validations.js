const depositoValido = (req, res, next) => {
    const { valor } = req.body;
    try {
        if (valor <= 0) {
            return res.status(400).json({ message: 'valor inválido' })
        }
        next();
    } catch (error) {
        return next(error.message);
    }
};

const compraValida = (req, res, next) => {
    const { quantidade, qtdeAtivo } = req.body;
    try {
        if (qtdeAtivo > quantidade) {
            return res.status(400).json({ message: 'Compra não permitida; quantidade é maior que a disponível para compra' })
        };
        next();
    } catch (error) {
        return next(error.message)
    };

};



module.exports = {
    depositoValido,
    compraValida,
};