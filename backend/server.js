require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const crypto = require('crypto'); // Gunakan untuk MD5 hashing
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// Endpoint login dengan MD5
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const sql = "SELECT * FROM user WHERE username = ?";
    db.query(sql, [username], (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ message: "Server error" });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const user = results[0];

        // Hash password input dengan MD5 untuk dicocokkan dengan database
        const hashedPassword = crypto.createHash('md5').update(password).digest("hex");

        if (hashedPassword !== user.password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Buat token JWT
        const token = jwt.sign(
            { id: user.id_user, username: user.username, level: user.level },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: "Login successful",
            token,
            user: { id: user.id_user, username: user.username, level: user.level }
        });
    });
});

// Jalankan server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
