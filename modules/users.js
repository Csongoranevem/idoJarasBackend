const express = require('express');
const router = express.Router();

const { users, IsEmailExists, getNextID, saveUsers, loadUsers } = require('../utils/store');

loadUsers()

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    let loggeduser = {};
    users.forEach(user => {
        if (user.email == email && user.password == password){
            loggeduser = user;
            return res.send(loggeduser)
        }

        return res.status(400).send("Hibás adatok")
    })
    ;

});

router.post('/registration', (req, res) => {
    let data = req.body
    //Email ellenőrzés
    if (IsEmailExists(data.email)) {
        return res.status(400).send({msg: "Ez az mail már foglalt"})
    }

    data.id = getNextID(users)  
    users.push(data)
    saveUsers()



});

router.get('/getUser/:id', (req, res) => {
    let id = req.params.id
    
    console.log(users)
    users.forEach(user => {
        if (user.id == id) {
            return res.send(user)
        }
    });
    return res.status(400)
})



module.exports = router

