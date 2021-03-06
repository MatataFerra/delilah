const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const {Order} = require('../../models/Order');

module.exports = router.put('/:_id', async (req, res)=> {
    try {
        

        const order = await Order.findOne({
            where: { _id: req.params._id }
        });

        if(order) {
            await order.update(req.body);
            res.json({
                update: req.body,
                message: 'Se ha actualizado con éxito'
            })
            return res.status(200)
        } else {
            res.json({Error: 'No cuenta con los permisos para realizar esa operación'});
            return res.status(403)
        }
    } catch (error) {
        res.status(403).send({Error: error})
    }
})