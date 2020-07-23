'use strict'

// const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypes)=> {
    const Projet =sequelize.define('Projet', {
        projet_ID : {
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
        link: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },

    }, {});

    return Projet;
}