const express = require('express');
const router = express.Router();
const { User } = require('../../models/Usuario');
const Product = require('../../models/Product');

module.exports = router.put('/:_id', async (req, res)=> {
    try {
        const user = await User.findOne({
            where: { _id: req.userId }
        });

        if (user._id !== req.userId){
            res.json({Error: 'Lo siento no podés modificar este producto'});
            return res.status(403)
        }

        const product = await Product.findOne({
            where: { _id: req.params._id }
        });

        if(product) {
            await product.update(req.body);
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
        
    }
})