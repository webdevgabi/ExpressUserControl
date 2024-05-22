const router = require('express').Router();

const createUserRoute = require('./createUser');
router.use('/create', createUserRoute);

const getUserRoute = require('./getUser');
router.use('/user', getUserRoute);

const updateUserRoute = require('./updateUser');
router.use('/update', updateUserRoute);

module.exports = router;
