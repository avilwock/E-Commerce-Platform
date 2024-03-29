//used .env file for configuration
require('dotenv').config();

//requires sequelize library 
const Sequelize = require('sequelize');

//uses the variables provided in the .env file to define database name, username, and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    //exports sequelize
module.exports = sequelize;
