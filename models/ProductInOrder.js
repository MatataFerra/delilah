const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

class ProductOrder extends Model{}

ProductOrder.init({
    _id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},
    {   
        sequelize,
        modelname: 'ProductInOrder',
        tableName: 'productInOrder',
        timestamps: false
    }
);


module.exports = ProductOrder;