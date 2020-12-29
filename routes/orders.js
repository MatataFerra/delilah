const express = require('express');
const router = express.Router();

const allOrders = require('../controller/orders/orders');
const createOrder = require('../controller/orders/createOrder');
const deleteOrder =require('../controller/orders/deleteOrder');
const updateOrder = require('../controller/orders/updateOrder');
const orderById = require('../controller/orders/orderById');
const updateState = require('../controller/orders/updateState');
const findOrderByUser = require('../controller/orders/findOrderByUser');

const { authUserRole  } = require('../middleware/roles');
const { hasValidToken } = require('../middleware/auth');
const { userExits } = require('../middleware/userExist')

router.use('/', hasValidToken, authUserRole, allOrders);
router.use('/', orderById)
router.use('/delete', hasValidToken, userExits, authUserRole, deleteOrder);
router.use('/update', hasValidToken, userExits, authUserRole, updateOrder)
router.use('/create',hasValidToken, userExits, createOrder);
router.use('/state', hasValidToken, userExits, authUserRole, updateState);
router.use('/userorder', hasValidToken, userExits, findOrderByUser);

module.exports = router;