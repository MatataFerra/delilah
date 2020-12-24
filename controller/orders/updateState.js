const express = require('express');
const router = express.Router();
const { Order, stateOrder } = require('../../models/Order');

module.exports = router.put('/:_id', async (req, res)=> {

    try {
 
        const order = await Order.findOne({
            where: { _id: req.params._id }
        });
        
        const { state } = req.body
        if(order && state in stateOrder) {
            await order.update(req.body, stateOrder);
            res.json({
                update: state,
                message: 'Se ha actualizado con éxito'
            })
        } else {
            res.json({Error: 'La operación que intenta realizar no es válida'});
            return res.status(403)
        }
    } catch (error) {
        console.log(error);
        res.status(403).send({Error: error})
    }

    

})