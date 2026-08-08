const express = require('express');

const app = express();
const PORT = 3000;


// 1. BUILT-IN MIDDLEWARE


// Allows Express to read JSON data
// sent in POST and PUT requests.

app.use(express.json());

// 2. CUSTOM LOGGING MIDDLEWARE

// This middleware runs for EVERY request.

app.use((req, res, next) => {

    const time = new Date().toLocaleString();

    console.log(
        `[${time}] ${req.method} request received at ${req.url}`
    );

    // Move to the next middleware/route
    next();
});


// ------------------------------------
// 3. CUSTOM SECURITY MIDDLEWARE
// ------------------------------------

// Checks whether the request contains
// an authorization header.

app.use((req, res, next) => {

    const userAgent = req.get('User-Agent');

    if (!userAgent) {

        return res.status(400).json({
            error: "User-Agent header is missing"
        });

    }

    next();
});


// ------------------------------------
// MOCK EMPLOYEE DATABASE


let employees = [
    {
        id: 1,
        name: "Ananya",
        department: "AI"
    },
    {
        id: 2,
        name: "Rahul",
        department: "Development"
    }
];


-
// GET - Read all employees
// ------------------------------------

app.get('/employees', (req, res) => {

    res.json(employees);

});


// ------------------------------------
// POST - Add an employee
// ------------------------------------

app.post('/employees', (req, res) => {

    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee created successfully",
        employee: newEmployee
    });

});


// PUT - Update an employee


app.put('/employees/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const employee = employees.find(e => e.id === id);

    if (employee) {

        employee.name = req.body.name;
        employee.department = req.body.department;

        res.json({
            message: "Employee updated successfully",
            employee: employee
        });

    } else {

        res.status(404).json({
            error: "Employee not found"
        });

    }

});


// ------------------------------------
// DELETE - Remove an employee
// ------------------------------------

app.delete('/employees/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const employeeExists = employees.some(e => e.id === id);

    if (!employeeExists) {

        return res.status(404).json({
            error: "Employee not found"
        });

    }

    employees = employees.filter(e => e.id !== id);

    res.json({
        message: `Employee ${id} deleted successfully`,
        remainingEmployees: employees
    });

});



// START SERVER


app.listen(PORT, () => {

    console.log("--------------------------------");
    console.log(`Employee API running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    console.log("--------------------------------");

});