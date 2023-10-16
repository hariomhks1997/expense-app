const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id1:Sequelize.STRING,
  sellingprice: Sequelize.STRING,
  fooditems: Sequelize.STRING,
  items:Sequelize.STRING,
  
});

module.exports = Product;
