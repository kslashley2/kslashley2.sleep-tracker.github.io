const fs = require('fs');
const express = require('express');
const path = require('path');
const csv = require('fast-csv');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Endpoint to handle POST requests to add session data
app.post('/end-session', (req, res) => {
  const sessionData = req.body;
  const filePath = path.join(__dirname, 'sessions.csv');
  const exists = fs.existsSync(filePath);

  const ws = fs.createWriteStream(filePath, { flags: 'a' });
  csv.write([sessionData], { headers: !exists }).pipe(ws).on('finish', () => {
      res.status(200).json({ message: 'Session added successfully!' });
  });
});

// Endpoint to fetch all session data
app.get('/sessions', (req, res) => {
  const filePath = path.join(__dirname, 'sessions.csv');
  const sessions = [];

  if (fs.existsSync(filePath)) {
      fs.createReadStream(filePath)
          .pipe(csv.parse({ headers: true }))
          .on('data', (row) => {
              sessions.push(row);
          })
          .on('end', () => {
              res.json(sessions);
          });
  } else {
      res.json(sessions);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

