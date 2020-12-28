const { Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

class FavProduct extends Model{}

FavProduct.init({
    
},
    {   
        sequelize,
        modelname: 'FavProduct',
        tableName: 'favProduct',
        timestamps: false
    }
);


module.exports = FavProduct