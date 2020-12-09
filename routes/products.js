const express = require('express');
const router = express.Router();

const allProducts = require('../controller/products/products');
const createProduct = require('../controller/products/createProduct');
const deleteProduct = require('../controller/products/deleteProduct');
const updateProduct = require('../controller/products/updateProduct');
const productById = require('../controller/products/productById')

const { authUserRole  } = require('../middleware/roles');
const { hasValidToken } = require('../middleware/auth');

router.use('/', allProducts);
router.use('/id', productById)
router.use('/delete', hasValidToken, deleteProduct);
router.use('/update', hasValidToken, updateProduct)
router.use('/create',hasValidToken, authUserRole, createProduct);


module.exports = router