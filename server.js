// Dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// Configs
require('dotenv').config()
const PORT = process.env.PORT


// Middleware
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})
// Routes
app.get('/', (req, res) => {
    res.send('this is the index page')
})

// Books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// Listening
app.listen(PORT, () =>{
    console.log('nomming at port', PORT)
})