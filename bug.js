const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the database query fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Express.js doesn't automatically handle database errors
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
    res.json(results);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});