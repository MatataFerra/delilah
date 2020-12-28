const Product = require('../models/Product');
const { User } = require('../models/Usuario');
const { Order } = require('../models/Order');
const PiO = require('../models/ProductInOrder');
const Fav = require('../models/favProduct');

console.log('iniciando relaciones entre tablas');
// 1 a M

User.hasMany(Order, {as: 'orderUser', foreignKey: 'orderByUserId'});
Order.belongsTo(User, {as: 'orderUser', foreignKey: 'orderByUserId'});


//M a M
Order.belongsToMany(Product, {through: PiO});
Product.belongsToMany(Order, {through: PiO});

User.belongsToMany(Product, {through: Fav})
Product.belongsToMany(User, {through: Fav});

