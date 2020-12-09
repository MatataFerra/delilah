const Product = require('../models/Product');
const { User } = require('../models/Usuario');
const Order = require('../models/Order');
const OiU = require('../models/OrderInUser');
const PiO = require('../models/ProductInOrder');

console.log('iniciando relaciones entre tablas');
// 1 a M

User.belongsToMany(Order, {through: OiU});

//M a M
Order.belongsToMany(Product, {through: PiO});
Product.belongsToMany(Order, {through: PiO});

