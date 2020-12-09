const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

const state = {
    new: 'new',
    confirm: 'confirm',
    making: 'making',
    sending: 'sending',
    delivered: 'delivered',
    cancel: 'cancel'
}

const payment = {
    cash: 'cash',
    debit: 'debit',
    credit: 'credit',
    ewallet: 'Electronic Wallet'
}

class Order extends Model{}

Order.init({
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    total: {
        type: DataTypes.INTEGER,
    },

    state: {
        type: DataTypes.STRING,
        defaultValue: state.new
    },

    payment: {
        type: DataTypes.STRING,
        defaultValue: payment.cash
    }
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
});

// Order.sync({force: false})
// .then(() => {
//   console.log('sincronizadas tabla de orders');
// });

module.exports = Order