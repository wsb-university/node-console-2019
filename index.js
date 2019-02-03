const express = require('express');
const path = require('path');

const PORT = 8081;

const app = express();

app.get('*', express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
