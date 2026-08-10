const express = require('express');

const app = express();
const PORT = 3000;

/*
 * 1. SINGLE ROUTE PARAMETER
 * Example URL:
 * http://localhost:3000/product/101
 *
 * :id is a route parameter.
 * It is accessed using req.params.id
 */

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    res.send(`
        <h1>Product Details</h1>
        <p>You are viewing product ID: <strong>${productId}</strong></p>
    `);
});


/*
 * 2. MULTIPLE ROUTE PARAMETERS
 * Example URL:
 * http://localhost:3000/student/AI101/2026
 *
 * :branch and :year are route parameters.
 */

app.get('/student/:branch/:year', (req, res) => {
    const { branch, year } = req.params;

    res.send(`
        <h1>Student Information</h1>
        <p>Branch: <strong>${branch}</strong></p>
        <p>Batch Year: <strong>${year}</strong></p>
    `);
});


/*
 * 3. QUERY PARAMETERS
 * Example URL:
 * http://localhost:3000/products?category=electronics&sort=price
 *
 * Query parameters are written after '?'.
 * They are accessed using req.query.
 */

app.get('/products', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Product Search",
        category: category || "All Categories",
        sorting: sort || "Default"
    });
});


/*
 * 4. SERVER
 */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
