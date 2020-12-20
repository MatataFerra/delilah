const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

class ProductOrder extends Model{}

ProductOrder.init({
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    subTotal: {
        type: DataTypes.FLOAT,
    },
},
    {   
        sequelize,
        modelname: 'ProductInOrder',
        tableName: 'productInOrder',
        timestamps: false
    }
);


module.exports = ProductOrder