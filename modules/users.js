const express = require('express');
const router = express.Router();

const { users, IsEmIDailExists, getNextID, _getNext, saveUsers } = require('../utils/store');

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    let loggeduser = {};
    users.forEach(user => {
        if (user.email == email && user.password == password){
            loggeduser = user;
            return
        }
    })
    res.send(loggeduser);
});
module.exports = router