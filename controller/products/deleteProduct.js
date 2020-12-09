const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const {User} = require('../../models/Usuario');

module.exports = router.delete('/:_id', async (req, res)=> {
    try {

        const user = await User.findOne({
            where: { _id: req.userId }
        });

        if (user._id !== req.userId){
            res.json({Error: 'Lo siento no podés borrar este producto'});
            return res.status(403)
        }

        const product = await Product.findOne({
            where: { _id: req.params._id }
        });

        if(product) {
            await product.destroy();
            res.json({
                message: 'Producto borrado con éxito'
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