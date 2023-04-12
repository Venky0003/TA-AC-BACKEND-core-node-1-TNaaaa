let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end('Hello backend');
}

server.listen(4000, () => {
  console.log('Welcome to servers');
});
