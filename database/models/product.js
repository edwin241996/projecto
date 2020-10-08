const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class product extends Model {}
product.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'product',
  }
);

module.exports = product;
