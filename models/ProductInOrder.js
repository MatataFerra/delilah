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

// ProductOrder.sync({force: false})
// .then(() => {
//   console.log('sincronizadas tabla ProductOrder');
// });

module.exports = ProductOrder;