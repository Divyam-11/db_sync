const sqlite3 = require('sqlite3').verbose();

// Open SQLite database
const db = new sqlite3.Database('data.db');

// Create data table
db.run(`
    CREATE TABLE IF NOT EXISTS data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_name TEXT,
        value TEXT
    )
`, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    } else {
        console.log('Table created successfully');
        
        // Insert test data
        db.run(`
            INSERT INTO data (id_name, value) VALUES
            ('jainny', 'bhaiya'),

    }
        `, (err) => {
            if (err) {
                console.error('Error inserting test data:', err.message);
            } else {
                console.log('Test data inserted successfully');
            }
        });
    }
});

// Close database connection
db.close();
