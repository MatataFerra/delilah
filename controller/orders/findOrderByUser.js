const express = require('express');
const router = express.Router();
const {Order} = require('../../models/Order');
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
                    order: ['state', 'DESC']
                    
                    
                , include: [
                    {model: Product,
                        attributes: ['productname', 'description', 'price', 'img'],
                    }
                ]},

            ],
           
            attributes: [ 'username', 'phone', 'adress'],
            nest: true,
            
        })

        res.send({Orders: users})
        
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})