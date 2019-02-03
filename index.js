const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8081;

const app = http.createServer();

app.addListener('request', function(request, response) {
  let fileName = request.url;
  if (request.url === '/') {
    fileName = 'index.html';
  }
  const requestedPath = path.resolve(__dirname, 'dist', fileName.replace(/^\//, ''));
  const content = fs.readFileSync(requestedPath, 'utf8');

  if (content) {
    response.writeHead(200);
    response.write(content);
  } else {
    response.writeHead(404);
  }
  response.end();
});

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
