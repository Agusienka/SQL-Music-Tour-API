// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const bands = require('./controllers/bands_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/band', bandsController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' Aga's app on port: ${process.env.PORT}`)
})