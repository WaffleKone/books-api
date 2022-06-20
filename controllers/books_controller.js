const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

//Index
books.get('/', (req, res) =>{
    Book.find()
        .then(foundBooks => {
            res.render('index', {
                book: foundBooks
            })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = books