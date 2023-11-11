const cors = require('cors')
const express = require('express')

const corsOptions = require('./cors.util')

const combineUtils = (app) => {
    app.use(cors(corsOptions))
    app.use(express.json())
}

module.exports = combineUtils