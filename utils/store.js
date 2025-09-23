const fs = require('fs')
const path = require('path')

const USER_FILE = path.join(__dirname, '..', 'database', 'users.json')

let users = []

loadUsers()


function loadUsers() {
    if (fs.existsSync(USER_FILE)) {
        const raw = fs.readFileSync(USER_FILE)
        
        try {
            users = JSON.parse(raw)
            console.log(USER_FILE)
        
        } catch (err) {
            console.log('Hiba', err)
            users = []
        }
    }

    else{
        saveUsers(users)
    }
}


function saveUsers() {
    fs.writeFileSync(USER_FILE, JSON.stringify(users));
}

module.exports = {users, loadUsers, saveUsers, }


function getNextID(table) {

    let  NextID = 1
    if (table.length == 0) {
        
    }
    let maxIndex;

    for (let i = 0; i < table.length; i++) {
    if (table[i].email) {
              maxIndex = i
    }        
    }

    
}