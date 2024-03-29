const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;

console.log(database, username, password, host);

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    /* ssl: {
      require: false,
      rejectUnauthorized: false,
    }, */
  },
});

/* const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "postgres",
  //comentar esto
  
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
    },
  },
 
}); */

module.exports = sequelize;
