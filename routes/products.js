const express = require('express');
const router = express.Router();

const allProducts = require('../controller/products/products');
const createProduct = require('../controller/products/createProduct');
const deleteProduct = require('../controller/products/deleteProduct');
const updateProduct = require('../controller/products/updateProduct');
const productById = require('../controller/products/productById')

const { authUserRole  } = require('../middleware/roles');
const { hasValidToken } = require('../middleware/auth');
const {userExits} = require('../middleware/userExist')

router.use('/', allProducts);
router.use('/', productById)
router.use('/delete', hasValidToken, userExits, authUserRole, deleteProduct);
router.use('/update', hasValidToken, userExits, authUserRole, updateProduct)
router.use('/create',hasValidToken, userExits, authUserRole, createProduct);


module.exports = router