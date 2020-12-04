const express = require('express');
const router = express.Router();

const allProducts = require('../controller/products/products');
const createProduct = require('../controller/products/createProduct')

router.use('/', allProducts)
router.use('/create', createProduct)


module.exports = router