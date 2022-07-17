const Joi = require('joi');

const errorMiddleware = (error, _req, res, _next) => {
    if (Joi.isError(error)) return res.status(400).json({ message: error.message });
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
