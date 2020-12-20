const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

class Product extends Model{}

Product.init({
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productname: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        defaultValue: 'Disfrutá de tu comida preferida :)'
        
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            isNumeric: {
                msg: 'Debe introducir un número válido'
            }
        }
    },

    instock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    companyname: {
        type: DataTypes.STRING
    },

    companyadress: {
        type: DataTypes.STRING
    },

    img: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    }

}, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
});


module.exports = Product