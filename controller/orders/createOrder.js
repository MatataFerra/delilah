const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const {User} = require('../../models/Usuario');

module.exports = router.post('/', async (req, res)=> {
    try {
        const {total, state, payment} = req.body
        const userReq = await req.userId;

        const user = await User.findByPk(userReq)

        await Order.create({
            total, state, payment,
            orderByUserId: userReq
        })
        res.send({message: `Orden creada con éxito para el usuario ${user.name}`});

        return res.status(200)
    } catch (err) {
        res.send({Error: err.message})
        return res.status(404)
    }
});