const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('parcial1sw', 'postgres', 'Javier55552' ,{
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
