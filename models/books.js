const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    year: {type: Number, required: true},
    quantity: {type: Number, default: 0},
    imageURL: {type: String, default: 'http://placehold.it/500x500.png'}
})

// model and export
const Book = mongoose.model('Book', bookSchema)
module.exports = Book