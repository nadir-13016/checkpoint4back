'use strict';



module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        user_ID : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            allowNull: false, 
            },

        firstname : {
            type: DataTypes.STRING,
 
        },

        lastname : {
            type : DataTypes.STRING,

        },

        email : {
            type : DataTypes.STRING
        },

        number : {
            type : DataTypes.INTEGER
        },

        birthday :{
            type: DataTypes.DATE
        },

        avatar : {
            type : DataTypes.STRING,
        },

        
    },
     {
        timestamps: false,
        underscored: true
     });
    
    // User.associate = models => {
    //     User.hasMany(models.Horse)
    // }


    return User;
}