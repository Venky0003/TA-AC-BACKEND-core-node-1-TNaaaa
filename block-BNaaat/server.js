let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.write('Welcome to index page');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/Html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  }
  if (req.method === 'GET' && req.url === '/about1') {
    res.setHeader('Content-Type', 'text/Html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('Server listening on port 5555');
});
