// jsonapp.js

const express = require('express');

const app = express();
const PORT = 3000;


/*
 * 1. BASIC JSON RESPONSE
 * Example URL:
 * http://localhost:3000/
 *
 * res.json() sends a JavaScript object
 * as a JSON response.
 */

app.get('/', (req, res) => {

    res.json({
        message: "Welcome to Student Portal",
        status: "Online",
        server: "Express",
        time: new Date()
    });

});


/*
 * 2. SENDING AN ARRAY OF OBJECTS
 *
 * Example URL:
 * http://localhost:3000/courses
 *
 * This represents data that could
 * come from a database.
 */

app.get('/courses', (req, res) => {

    const courseList = [
        {
            id: 201,
            name: "Machine Learning",
            duration: "3 Months"
        },
        {
            id: 202,
            name: "Web Development",
            duration: "4 Months"
        },
        {
            id: 203,
            name: "Data Analytics",
            duration: "2 Months"
        }
    ];

    // Send the array as JSON
    res.json(courseList);

});


/*
 * 3. DYNAMIC JSON RESPONSE
 *
 * Route Parameter:
 * /course/:id
 *
 * Example URL:
 * http://localhost:3000/course/202
 *
 * The value 202 is obtained using
 * req.params.id
 */

app.get('/course/:id', (req, res) => {

    const courseId = req.params.id;

    res.json({
        requestedCourseId: courseId,
        courseName: "Web Development",
        instructor: "John",
        duration: "4 Months",
        available: true,
        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "Express"
        ]
    });

});


/*
 * 4. START THE SERVER
 */

app.listen(PORT, () => {

    console.log(`JSON Server is running at http://localhost:${PORT}`);

});
