const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;

console.log(database, username, password, host);

const sequelize = new Sequelize(database, username, password ,{
    host: host,
    dialect: 'postgres',
});

module.exports = sequelize;
