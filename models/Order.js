const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');
const moment = require('moment')

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

const time = {
    now: moment.utc().format('HH:mm:ss')
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
    },

    time: {
        type: DataTypes.TIME,
        defaultValue: time.now
    }
}, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
});


module.exports = Order