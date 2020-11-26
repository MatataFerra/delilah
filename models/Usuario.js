const { Sequelize, DataTypes, Model } = require('sequelize');
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
    telefono: {
      type: DataTypes.INTEGER,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
    },
    hourCreated: {
      type: DataTypes.TIME,
      defaultValue: Sequelize.NOW
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: role.regular
    }
    
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
})

User.sync({force: false})
.then(() => {
  console.log('sincronizadas tabla usuario');
});


module.exports = {User, role}