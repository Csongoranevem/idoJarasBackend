const fs = require('fs')
const path = require('path')

const USER_FILE = path.join(__dirname, '..', 'database', 'users.json')
const WEATHER_FILE = path.join(__dirname, '..', 'database', 'weather.json')


let users = []
let weathers = []

initStore()


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

    else {
        saveUsers()
    }
}


function saveUsers() {
    fs.writeFileSync(USER_FILE, JSON.stringify(users));
}

function saveWeather() {
    fs.writeFileSync(WEATHER_FILE, JSON.stringify(weathers));
}


function initStore() {
    loadUsers()
    //Betölti az adatokat
}

function getNextID(table) {

    let NextID = 1
    if (table.length == 0) {
        return NextID
    }
    
    let maxIndex = 0;

    for (let i = 0; i < table.length; i++) {
        if (table[i].email) {
            maxIndex = i
        }
    }

    return table[maxIndex].id + 1;

}

function IsEmailExists(email) {
    let exists = false
    users.forEach(users => {
        if (users.email == email) {
            exists = true
            return exists
        }
    });
    return exists
}

function isDayAlreadyDone(day) {
    let done = false
    weathers.forEach(weather => {
        if (weather.date == day) {
            done = true
            return done
        }
    });
    return done

    
}




module.exports = { initStore, IsEmailExists, getNextID, loadUsers, saveUsers, saveWeather, isDayAlreadyDone, users, weathers }