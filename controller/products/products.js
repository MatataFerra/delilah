const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');


module.exports = router.get('/', async (req, res)=> {
    try {
        const products = await Product.findAll();
        res.send({productos: products});

    } catch (err) {
        console.log(err);
        res.send(err)
    }
});