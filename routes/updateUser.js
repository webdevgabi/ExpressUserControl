const router = require('express').Router();
const find = require('../db/find');
const updateOne = require('../db/updateOne');

router.put('/:username', async (req, res) => {

    const user = await find({ collection: 'users', condition: { username: req.params.username } })
    
    if(!user) {
        res.status(404).send('User not found');
        return;
    }

    const updatedUser = {...user,...req.body };
    const isUpdated = await updateOne({ collection: 'users', data: updatedUser, condition: { username: req.params.username } });

    if(!isUpdated) {
        res.status(500).send('Internal Server Error');
        return;
    }

    res.json(updatedUser);

})

module.exports = router;