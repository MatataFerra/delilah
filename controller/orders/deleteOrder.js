const express = require('express');
const router = express.Router();
const {Order} = require('../../models/Order');


module.exports = router.delete('/:_id', async (req, res)=> {
    try {

        const order = await Order.findOne({
            where: { _id: req.params._id }
        });

        if(order) {
            await order.destroy();
            res.json({
                message: 'Orden borrada con éxito'
            })
            return res.status(200)
        } else {
            res.json({Error: 'No cuenta con los permisos para realizar esa operación'});
            return res.status(403)
        }

    } catch (error) {
        console.log(error);
        res.status(403).send({Error: error});
    }
})