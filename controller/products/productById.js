const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');


module.exports = router.get('/:_id', async (req, res)=> {
    try {
        const product = await Product.findOne({
            where: {_id: req.params._id}
        });

        if(product) {
            res.send({Product: product});
            return res.status(200)
        } else {

            res.status(404).send({
                Error: 'El producto que busca no existe'
            })
        }

    } catch (err) {
        res.json(err)
    }
});