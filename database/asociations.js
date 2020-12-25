const Product = require('../models/Product');
const { User } = require('../models/Usuario');
const { Order } = require('../models/Order');
//const OiU = require('../models/OrderInUser');
const PiO = require('../models/ProductInOrder');
//const orderById = require('../controller/orders/orderById');

console.log('iniciando relaciones entre tablas');
// 1 a M

User.hasMany(Order, {as: 'orderUser', foreignKey: 'orderByUserId'});
Order.belongsTo(User, {as: 'orderUser', foreignKey: 'orderByUserId'});



//M a M
Order.belongsToMany(Product, {through: PiO});
Product.belongsToMany(Order, {through: PiO});

