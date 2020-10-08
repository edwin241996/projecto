const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
  database.database,
  database.name,
  database.descricao,
  {
    host: database.host,
    dialect: 'sqlite',
  }
);

module.exports = sequelize;
