const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const Fav = require('../../models/favProduct');
const Product = require('../../models/Product');

module.exports = router.get('/', async (req, res)=> {
    try {
        const user = await User.findOne({
            where: {_id: req.userId},
            attributes: [
                'username',
                'phone',
                'adress',
            ],
            include: [
                {   
                    model: Product, 
                    attributes: [
                        'productname', 
                        'description', 
                        'price', 
                        'companyname',
                        'img'
                    ]
                }
            ]
        })

        res.json({Users: user})

        return res.status(200)
    } catch (error) {
        console.log(error);
        res.status(403).send({Error: error})
    }
})