const Sequelize = require('sequelize');

const sequelize = new Sequelize('Garbage-Management', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;