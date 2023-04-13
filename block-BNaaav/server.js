let http = require('http');
let fs = require('fs');
let server = http.createServer(handleRequest);
let url = require('url');
let path = require('path');

function handleRequest(req, res) {
  console.log(`Received ${req.method} request for ${req.url}`);
  let parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/index') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && parsedUrl.pathname === '/gallery') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./gallery.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('.' + parsedUrl.pathname, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (
    req.url.split('.').pop() === 'jpg' ||
    req.url.split('.').pop() === 'png'
  ) {
    if (
      res.setHeader('Content-Type', 'image/jpeg') ||
      res.setHeader('Content-Type', 'image/png')
    );
    {
      fs.readFile('.' + parsedUrl.pathname, (err, content) => {
        if (err) return console.log(err);
        res.end(content);
      });
    }
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3k');
});
