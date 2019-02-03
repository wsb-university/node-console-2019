const express = require('express');
const path = require('path');

const PORT = 8081;
const NOTES_URL = '/notes';

const app = express();

app.get(NOTES_URL, function(req, res) {
    res.json({
      notes: []
    })
});

app.post(NOTES_URL, function(req, res) {
    res.json({
      status: 'added'
    })
});

app.delete(NOTES_URL, function(req, res) {
    res.json({
      status: 'deleted'
    })
});

app.get('*', express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
