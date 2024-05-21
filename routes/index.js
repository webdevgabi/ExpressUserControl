const router = require('express').Router();

const createRoute = require('./create');
router.use('/create', createRoute);

module.exports = router;
