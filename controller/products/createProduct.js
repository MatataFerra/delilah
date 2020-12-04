const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

module.exports = router.post('/', async (req, res)=> {
    try {

        await Product.create(req.body);
        res.send({message: 'Producto creado con éxito'})
    
        return res.status(200)
    } catch (err) {
        res.send({Error: err.message})
        return res.status(404)
    }
});