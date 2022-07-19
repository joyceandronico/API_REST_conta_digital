require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: 'investimentos',
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3305
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: 'investimentos',
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3305
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: 'investimentos',
    host: process.env.HOST,
    dialect: 'mysql',
    port: 3305
  },
};