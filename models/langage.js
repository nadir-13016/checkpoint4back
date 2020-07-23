'use strict'

// const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes)=> {
    const Langage =sequelize.define('Langage', {
        langage_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },
        name: {
            type: DataTypes.STRING
        },
        niveau: {
            type : DataTypes.INTEGER
        }
    }, {});

    return Langage;
}