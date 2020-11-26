const express = require('express');
const router = express.Router();
const {tokenExpires, hasValidToken} = require('../middleware/auth');
const { authUserRole, sameUser } = require('../middleware/roles')

const { allUsers, logginUser } = require('../controller/users');

//default route /users
router.use('/login', tokenExpires, hasValidToken, logginUser)
router.use('/', authUserRole, tokenExpires, hasValidToken, allUsers);


module.exports = router;