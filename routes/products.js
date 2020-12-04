const express = require('express');
const router = express.Router();

const allProducts = require('../controller/products/products');
const createProduct = require('../controller/products/createProduct');

const { authUserRole  } = require('../middleware/roles');
const { hasValidToken } = require('../middleware/auth');

router.use('/', allProducts)
router.use('/create',hasValidToken, authUserRole, createProduct);


module.exports = router