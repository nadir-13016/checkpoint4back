'use strict'

// const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes)=> {
    const Formation =sequelize.define('Formation', {
        formation_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },
        name: {
            type: DataTypes.STRING
        },
        techno: {
            type: DataTypes.STRING
        },
        duree: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },

    }, {});

    return Formation;
}