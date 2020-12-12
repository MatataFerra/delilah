const express = require('express');
const router = express.Router();

const allOrders = require('../controller/orders/orders');
const createOrder = require('../controller/orders/createOrder');
const deleteOrder =require('../controller/orders/deleteOrder');
const updateOrder = require('../controller/orders/updateOrder');
const orderById = require('../controller/orders/orderById')

const { authUserRole  } = require('../middleware/roles');
const { hasValidToken } = require('../middleware/auth');

router.get('/', allOrders);
router.use('/id', orderById)
router.use('/delete', hasValidToken, deleteOrder);
router.use('/update', hasValidToken, updateOrder)
router.use('/create',hasValidToken, createOrder);


module.exports = router;