const express = require('express');
const router = express.Router();
const {Order} = require('../../models/Order');
const {User} = require('../../models/Usuario');
const Product = require('../../models/Product');

const ProductOrder = require('../../models/ProductInOrder')

module.exports = router.get('/', async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [
                {model: Product, attributes:[
                    'productname',
                    'price',
                    'img',
                ]},
                
            ],
            order: [
                ['state', 'DESC'],
                ['time', 'DESC']
            ],
            attributes: ['state', 'total', 'payment']
        });

        console.log(orders);

        res.send({orders: orders});

    } catch (err) {
        res.json(err)
    }
})