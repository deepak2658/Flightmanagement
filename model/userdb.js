'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('Users-se-project',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type  : Sequelize.STRING,
        allowNull:false
    },
    fullname : {
        type : Sequelize.STRING,
        allowNull: false
    },
    gender : {
        type : Sequelize.STRING,
        allowNull: false
    },
    DOB : {
        type : Sequelize.STRING,
        allowNull:false
    },
    no : {
        type : Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;

