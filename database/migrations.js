const {User} = require('../models/Usuario');
const Product = require('../models/Product');
const {Order} = require('../models/Order');
const PiO = require('../models/ProductInOrder');

const force = false;

(async ()=> {
    await User.sync({force: force});
    await Order.sync({force: force});
    await Product.sync({force: force});
    await PiO.sync({force: force});
})().then(console.log('Sync Exitoso'))
.catch(err => {
    console.log(err);
});



