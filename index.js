// get environment variables 
require('dotenv').config()

//require needed modules
const express = require('express')

// initialize the app object
const app = express()

// set up view engine and requiring jsx
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// using router from places
app.use('/places', require('./controllers/places'))

// create home page route
app.get('/', (req, res) => {
    res.render('home')
})

// catch all other routes 
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// listen for connections 
app.listen(process.env.PORT)