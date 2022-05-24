// get environment variables 
require('dotenv').config()

//require needed modules
const express = require('express')

// initialize the app object
const app = express()

// using router from places
app.use('/places', require('./controllers/places'))

// create home page route
app.get('/', (req, res) => {
    res.send('Hello World')
})

// catch all other routes 
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// listen for connections 
app.listen(process.env.PORT)