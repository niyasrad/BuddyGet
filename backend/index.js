const express = require('express')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()

const combineUtils = require('./src/utils')
const combineRoutes = require('./src/routes')

combineUtils(app)
combineRoutes(app)

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Server up and running!'
    })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    console.log(`---- SERVER LISTENING ON PORT ${PORT} ----`)

    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('---- CONNECTED TO DB! ----'))
    .catch(err => console.log('FAILED TO CONNECT TO DB! - '+ err))
})
