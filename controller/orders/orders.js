const express = require('express');
const router = express.Router();
const {Order} = require('../../models/Order');
const Product = require('../../models/Product');

module.exports = router.get('/', async (req, res)=> {
    try {
        const orders = await Order.findAll({
            include: [{model: Product }],
            order: [
                ['state', 'DESC'],
                ['time', 'DESC']
            ]
        });

        res.send({orders: orders});

    } catch (err) {
        res.json(err)
    }
});