'use strict'


module.exports = (sequelize, DataTypes)=> {
    const Experience =sequelize.define('Experience', {
        experience_ID : {
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


    }, {});

    return Experience;
}