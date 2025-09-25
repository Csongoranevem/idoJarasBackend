const express = require('express');
const router = express.Router();

const { users, IsEmailExists, getNextID, saveUsers, loadUsers, isDayAlreadyDone } = require('../utils/store');


router.post('/addNewWeather', (req, res) => {
    let data = req.body


    if (!isDayAlreadyDone()) {
        users.push(data)
        saveWeather()
        return res.send("Sikeres adatmentés")

    }
    else{
        return res.status(400).send("Már létező adat")
    }



})



module.exports = router


