const fs = require('fs');
const express = require('express');
const path = require('path');
const csv = require('csv-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(express.json());

//Endpoint to handle POST requests to add session data
app.post('/end-session', (req, res) => {

  var results = [];
  fs.createReadStream('sessions.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    
    console.log(req.body)
    results.push(req.body);
    console.log(results)
    if (results.length != 0) {
    res.status(200).send('Session added successfully!');
    const csvWriter = createCsvWriter({
        path: 'sessions.csv',
        header: [
            {id: '-', title: '-'},
            {id: 'startingDate', title: 'startingDate'},
            {id: 'startTime', title: 'startTime'},
            {id: 'endTime', title: 'endTime'},
            {id: 'disruptions', title: 'disruptions'},
            {id: 'averageHeartRate', title: 'averageHeartRate'},
            {id: 'averageRespiratory', title: 'averageRespiratory'},
            {id: 'mood', title: 'mood'},
            {id: 'diaryEntry', title: 'diaryEntry'},
        ]
  });
  csvWriter.writeRecords(results)      
      .then(() => {
          console.log('Added');
      });
} else {
  res.status(404).send('Failed to add session');
}
  });

  
});

// Endpoint to fetch all session data
app.get('/sessions', (req, res) => {
  
var results = [];
  fs.createReadStream('sessions.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    res.json(results);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

