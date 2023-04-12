let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/Html')
  res.writeHead(200, { 'Content-Type': 'text/Html' });
  res.write('<h1>Hello</h1>');
  res.end();
}

server.listen(4444);
