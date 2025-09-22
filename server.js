const express = require('express');
var cors = require('cors');
const { initStore } = require('./utils/store');

const userRoute = require('./modules/users')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get('/', (_req, res) => {
    res.send('Backend API');
});

app.use('/users', userRoute);


app.listen(3000, ()=>{
    console.log(`Server listening on http://localhost:3000`);
});