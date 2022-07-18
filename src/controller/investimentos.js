const comprarAtivos = async (req, res, next) => {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;

    const comprarAtivos = {
        codCliente, codAtivo, qtdeAtivo,
    }

    try {
        await investimentos.create(comprarAtivos);
        res.status(201).json({ message: 'compra gerada com sucesso' });
    } catch (err) {
        next(err)
    }
};
