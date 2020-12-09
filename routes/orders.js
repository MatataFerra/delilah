const express = require('express');
const router = express.Router();

const allOrders = require('../controller/orders/orders')

router.get('/', allOrders)

module.exports = router;