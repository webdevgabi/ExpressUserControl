const router = require('express').Router();
const deleteOne = require("../db/deleteOne");

router.delete('/:username', async (req, res) => {
    const isDeleted = await deleteOne({ collection: 'users', condition: { username: req.params.username }});
    if(!isDeleted) {
        res.status(404).send('User not found');
        return;
    }

    res.status(200).send('User deleted');
})

module.exports = router