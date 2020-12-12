const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

class OrderInUser extends Model{}

OrderInUser.init({
    _id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},
    {
        sequelize,
        modelname: 'OrderInUser',
        tableName: 'orderInUser',
        timestamps: false
    }
);


module.exports = OrderInUser;