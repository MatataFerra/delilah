const express = require('express');
const router = express.Router();

const { hasValidToken } = require('../middleware/auth');
const { authUserRole  } = require('../middleware/roles');

const logginUser = require('../controller/users/login');
const singUp = require('../controller/users/singup');
const updateUser = require('../controller/users/updateUser');
const allUsers = require('../controller/users/users');
const deleteUser = require('../controller/users/deleteUser');
const userById = require('../controller/users/userById')

//default route /users
router.use('/login', logginUser);
router.use('/singup', singUp);
router.use('/update', hasValidToken, updateUser);
router.use('/delete', hasValidToken, deleteUser);
router.use('/userok', hasValidToken, userById)
router.use('/', hasValidToken, authUserRole, allUsers);


module.exports = router;