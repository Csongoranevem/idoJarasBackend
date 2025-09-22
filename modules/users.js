const express = require('express');
const router = express.Router();

const { users, IsEmailExists, getNextID, saveUsers } = require('../utils/store');

router.post('/getUser', (req, res) =>
{
    let data = req.body
    users.push(data)
    saveUsers()

})

module.exports = router