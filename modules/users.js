const express = require('express');
const router = express.Router();

const {IsEmailExists, getNextID, loadUsers, saveUsers, users} = require('../utils/store');

loadUsers()

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    for (const user of users) {
        if (user.email === email && user.password === password) {
            return res.status(200).send(user);
        }
    }
    return res.status(400).send("Hibás adatok");
});


router.post('/registration', (req, res) => {
    let data = req.body
    //Email ellenőrzés
    if (IsEmailExists(data.email)) {
        return res.status(400).send({msg: "Ez az mail már foglalt"})
    }
    else{
    data.id = getNextID(users)  
    //console.log(data.name);
    
    console.log(data);
    
    users.push(data)
    saveUsers()
    res.status(200).send(users);

    }





});

router.get('/getUser/:id', (req, res) => {
    let id = req.params.id
    
    console.log(users)
    users.forEach(user => {
        if (user.id == id) {
            return res.send(user)
        }
    });
    return res.status(404).send({ msg: "Felhasználó nem található" });
})



module.exports = router

