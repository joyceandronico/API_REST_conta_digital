const depositoValido = (req, res, next) => {
    const { valor } = req.body;
    try {
        if (valor <= 0) {
            return res.status(400).json({ message: 'valor inválido' })
        }
        return next();
    } catch (error) {
        return next(error.message);
    }
};

module.exports = {
    depositoValido
};