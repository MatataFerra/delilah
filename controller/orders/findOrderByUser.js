const express = require('express');
const router = express.Router();
const { Order } = require('../../models/Order');
const {User} = require('../../models/Usuario');
const Product = require('../../models/Product');


module.exports = router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            
            include: [
                {
                    model: Order,
                    as: 'orderUser',
                    attributes:[
                        'state', 'total', 'payment',
                    ],
                    
                    include: [
                    {model: Product,
                        attributes: ['productname', 'description', 'price', 'img']
                    }
                ]},

            ],
            order: [['orderUser', 'state', 'DESC']],
            attributes: [ 'username', 'phone', 'adress'],

            
        })

        res.send({Orders: users})
        
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})