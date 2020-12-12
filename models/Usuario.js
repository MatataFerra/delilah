const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectionDB');

const role = {
  admin: 'admin',
  regular: 'regular'
}

class User extends Model{}

User.init({
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },

    name: {
      type: DataTypes.STRING,
      defaultValue: 'Estimadx',
    },

    lastname: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING(50),
      validate: {
        isNumeric: true
      }
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    role: {
      type: DataTypes.STRING,
      defaultValue: role.regular
    }
    
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false
})


module.exports = {User, role}