const router = require('express').Router();
const find = require('../db/find');

router.get('/:username', async (req, res) => {

    const user = await find({ collection: 'users', condition: { username: req.params.username } })
    
    if(!user) {
        res.status(404).send('User not found');
        return;
    }

    res.json(user);
})

module.exports = router