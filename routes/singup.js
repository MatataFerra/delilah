const express = require('express');
const router = express.Router();
const { singUp } = require('../controller/singup');


router.use('/', singUp)


module.exports = router;
