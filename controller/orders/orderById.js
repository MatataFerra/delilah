const express = require('express');
const router = express.Router();
const {Order} = require('../../models/Order');


module.exports = router.get('/:_id', async (req, res)=> {
    try {
        const order = await Order.findOne({
            where: {_id: req.params._id}
        });

        if(order) {
            res.send({order: order});
            return res.status(200)
        } else {

            res.status(404).send({
                Error: 'La orden que busca no existe'
            })
        }

    } catch (err) {
        res.json(err)
    }
});