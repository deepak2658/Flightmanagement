'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const flight = sequelize.define('Flights',{
    flightno : {
        type : Sequelize.INTEGER,
        allowNull : false,
                
    },
    airplaneno : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    departure : {
        type : Sequelize.STRING,
        allowNull : false
    },
    dtime : {
        type  : Sequelize.STRING,
        allowNull:false
    },
    arrival : {
        type : Sequelize.STRING,
        allowNull: false
    },
    atime : {
        type : Sequelize.STRING,
        allowNull: false
    },
    ecapacity : {
        type : Sequelize.INTEGER,
        allowNull:false
    },
    eprice : {
        type : Sequelize.DOUBLE,
        allowNull:false
    },
    bcapacity : {
        type : Sequelize.STRING,
        allowNull: false
    },
    bprice : {
        type : Sequelize.DOUBLE,
        allowNull:false
    }
});

module.exports = flight;

