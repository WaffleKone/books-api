// Dependencies
const express = require('express')

// Configs
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('this is the index page')
})

// Listening
app.listen(PORT, () =>{
    console.log('nomming at port', PORT)
})