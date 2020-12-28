const express = require('express');
const router = express.Router();

const { hasValidToken } = require('../middleware/auth');
const { authUserRole  } = require('../middleware/roles');

const logginUser = require('../controller/users/login');
const singUp = require('../controller/users/singup');
const updateUser = require('../controller/users/updateUser');
const allUsers = require('../controller/users/users');
const deleteUser = require('../controller/users/deleteUser');
const userById = require('../controller/users/userById');
const getFavs = require('../controller/users/getFavProducts');
const {addFav} = require('../controller/users/favProduct');

//default route /users
router.use('/login', logginUser);
router.use('/singup', singUp);
router.use('/update', hasValidToken, updateUser);
router.use('/delete', hasValidToken, authUserRole, deleteUser);
router.use('/userById', hasValidToken, userById)
router.use('/', hasValidToken, authUserRole, allUsers);
router.use('/favs', getFavs),
router.use('/favs', addFav)


module.exports = router;