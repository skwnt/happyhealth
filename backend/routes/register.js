const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');  
require('dotenv').config(); 

const router = express.Router();

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,   
});

// Test the connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// POST route to handle user registration
router.post('/', async (req, res) => {
    const { firstName, surname, dob, hospital_number, email, department_id, telephone_number, password } = req.body;

    try {
        console.log("Received Data:", req.body); // ✅ Debugging: Ensure dob is received

        // Validate that all fields are provided
        if (!firstName || !surname || !dob || !hospital_number || !email || !department_id || !telephone_number || !password) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // ✅ Ensure `dob` is formatted correctly for MySQL (YYYY-MM-DD)
        const formattedDOB = new Date(dob).toISOString().split("T")[0];

        // ✅ Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Insert user into MySQL database
        const query = `
            INSERT INTO users (firstName, surname, dob, hospital_number, email, department_id, telephone_number, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(query, [firstName, surname, formattedDOB, hospital_number, email, department_id, telephone_number, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error during registration:', err);
                return res.status(500).json({ message: 'Error during registration' });
            }
            res.status(201).json({ message: 'Registration successful!' });
        });
    } catch (error) {
        console.error('Error hashing the password:', error);
        return res.status(500).json({ message: 'Error processing password' });
    }
});

module.exports = router;
