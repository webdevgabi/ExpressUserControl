const router = require('express').Router();

const createUserRoute = require('./createUser');
router.use('/create', createUserRoute);

const getUserRoute = require('./getUser');
router.use('/user', getUserRoute);

module.exports = router;
