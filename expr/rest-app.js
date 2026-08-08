const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to read JSON data sent in POST and PUT requests
app.use(express.json());

// Sample Book Database

let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear"
    }
];


// 1. GET - Read all books

app.get('/books', (req, res) => {

    res.json(books);

});

// 2. POST - Add a new book
// ------------------------------------


app.post('/books', (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });

});


// 3. PUT - Update an existing book

app.put('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (book) {

        book.title = req.body.title;
        book.author = req.body.author;

        res.json({
            message: "Book updated successfully",
            book: book
        });

    } else {

        res.status(404).json({
            error: "Book not found"
        });

    }

});


// ------------------------------------
// 4. DELETE - Remove a book


app.delete('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const bookExists = books.some(b => b.id === id);

    if (!bookExists) {

        return res.status(404).json({
            error: "Book not found"
        });

    }

    books = books.filter(b => b.id !== id);

    res.json({
        message: `Book ${id} deleted successfully`,
        remainingBooks: books
    });

});


// Start the server
// ------------------------------------

app.listen(PORT, () => {

    console.log(`REST API Server running at http://localhost:${PORT}`);

});