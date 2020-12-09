const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const Order = require('../../models/Order');

module.exports = router.get('/', async (req, res)=> {
    try {

        const usuarios = await User.findAll({
            include: [Order],
            attributes: {
                exclude: ['password']
            }
        });
        res.json({usuarios: usuarios});

    } catch (err) {
        res.json(err)
    }
});
