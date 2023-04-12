let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to homepage');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'application/json');
    res.end('{message: this is a post request}');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/Html' });
    res.end('<h2>Page not Found </h2>');
  }
}

server.listen(5000, () => {
  console.log('Server is listening on 5k port');
});
