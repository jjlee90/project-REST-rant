// making a controller
const router = require('express').Router()

// route for places
router.get('/', (req, res) => {
    res.send('GET /places')
})

// exporting router 
module.exports = router