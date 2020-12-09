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

// OrderInUser.sync({force: false})
// .then(() => {
//   console.log('sincronizadas tabla OrderInUser');
// });

module.exports = OrderInUser;