const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// SQLite database configuration
const dbPath = path.join(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

// Route to fetch data
app.get('/fetch_data', (req, res) => {
    db.all('SELECT * FROM data', (err, rows) => {
        if (err) {
            console.error('Error fetching data from SQLite:', err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(rows);
        }
    });
});

// Serve index.html file as the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
