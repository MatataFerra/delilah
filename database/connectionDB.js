const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('delilah', 'root', process.env.DB_PASS, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
    timestamps: false
  }

);

(async()=>{
  try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a la DB');
    } catch (error) {
      console.log('No se pudo conectar a la DB:');
      console.log(error);
    }
})();


module.exports = sequelize;

