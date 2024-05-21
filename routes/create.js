const router = require('express').Router();
const insertOne = require('../db/insertOne');

router.post('/', async (req, res) => {
    const { username, displayName, email, password } = req.body

    if(!username || !email || !displayName || !password) {
        res.status(400).send('Bad Request');
        return;
    }

    const user = {
        username: String(username),
        dislpayName: String(displayName),
        email: String(email),
        password: password,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const isInserted = await insertOne({ collection: 'users', data: user });

    if(!isInserted) {
        res.status(500).send('Internal Server Error');
        return;
    }

    res.status(200).send('OK');
});

module.exports = router