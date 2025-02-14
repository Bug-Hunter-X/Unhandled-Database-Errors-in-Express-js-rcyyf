const express = require('express');
const app = express();
//Simulate database interaction using try...catch block
app.get('/', (req, res) => {
  try {
    // Simulate database query
    const results = db.query('SELECT * FROM users');
    res.json(results);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});