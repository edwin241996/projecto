const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../db');

class loja extends Model {}
loja.init(
  {
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'loja',
  }
);

module.exports = loja;
