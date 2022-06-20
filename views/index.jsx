const React = require('react')
const books = require('../controllers/books_controller')
const Default = require('./layout/default')

function Index({books}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <h3>Books</h3>
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.ObjectID}>
                                <a href={`/books/${book.ObjectID}`}>
                                    {book.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}