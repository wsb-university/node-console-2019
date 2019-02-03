const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8081;
const NOTES_URL = '/notes';
const notes = [];

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get(NOTES_URL, function(req, res) {
  res.json({notes: notes});
});

app.post(NOTES_URL, function(req, res) {
  const note = req.body.note;
  notes.push(note);
  res.json({value: note});
});

app.delete(NOTES_URL, function(req, res) {
  const note = req.body.note;
  const index = notes.indexOf(note);
  notes.splice(index, 1);
  res.json({deleted: note});
});

app.get('*', express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
