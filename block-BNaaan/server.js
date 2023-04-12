let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  console.log(req.headers);
  res.end('Welcome to servers');
}

server.listen(3000, () => {
  console.log('Welcome to localhost on 3k');
});
