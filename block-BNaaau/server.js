let http = require('http');
let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Welcome to Index Page');
//     res.end();
//   }
// }

// server.listen(5000, () => {
//   console.log('Server running on port 5k');
// });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('My first server in NodeJS');
//     res.end();
//   }
// }
// server.listen(5100, () => {
//   console.log('Server running on port 5100');
// });

// function handleRequest(req, res) {
//   let userAgent = req.headers['user-agent'];
//   res.setHeader('Content-Type', 'text/plain');
//   res.write(`User-Agent: ${userAgent}`);
//   res.end();
// }
// server.listen(5552, () => {
//   console.log('Server running on port 5552');
// });

// function handleRequest(req, res) {
//   let url = req.url;
//   let method = req.method;
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write(`Requested Url  ${url}`);
//     res.write(`Requested method  ${method}`);
//     res.end();
//   }
// }
// server.listen(5566, () => {
//   console.log('Server running on port 5566');
// });

// function handleRequest(req, res) {
//   let headers = req.headers;
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write(`Requested headers  ${JSON.stringify(headers, null, 2)}`);
//     res.end();
//   }
// }
// server.listen(7000, () => {
//   console.log('server listening on port 7000');
// });

// function handleRequest(req, res) {
//     res.statusCode = 202;
//     res.end("status code")
//   }
//   server.listen(3333, () => {
//     console.log('Server listening on port 3333');
//   });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/Html');
//     res.write('<h3>Welcome to altcampus</h3>');
//     res.end();
//   }
// }
// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/Html' });
//     res.write('<h3>Welcome to altcampus</h3>');
//     res.end();
//   }
// }
// server.listen(8000, () => {
//   console.log('server listening on port 8000');
// });

// function handleRequest(req, res) {
//   let data = '{success: true, message: "Welcome to Nodejs"}';
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify(data));
//     res.end();
//   }
// }
// server.listen(8888, () => {
//   console.log('server listening on port 8888');
// });

// function handleRequest(req, res) {
//     if (req.method === 'GET' && req.url === '/') {
//       res.setHeader('Content-Type', 'text/Html');
//       res.write('Welcome to index page');
//       res.end();
//     }
//     if(req.method === 'POST' && req.url ==='/post'){
//         res.setHeader('Content-Type', 'text/Html');
//         res.write('<h2>posted for first time</h2>');
//         res.end();
//     }
//   }
//   server.listen(5050, () => {
//     console.log('server listening on port 5050');
//   });

// function handleRequest(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Welcome Venkat');
//     res.end();
//   }
//   else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'text/Html');
//     res.write('<h2> Welcome Venkat</h2>');
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.end('Page not Found');
//   }
// }
// server.listen(2345, () => {
//   console.log('server listening on port 2345');
// });

// function handleRequest(req, res) {
//     if (req.method === 'GET' && req.url === '/users') {
//       res.setHeader('Content-Type', 'text/Html');
//       res.write('<h1>Venkat<h1> <email>raj17270@gmail.com</email>');
//       res.end();
//     }
//     else if (req.method === 'POST' && req.url === '/users') {
//       res.setHeader('Content-Type', 'text/plain');
//       res.write('Posted for the second time');
//       res.end();
//     }
// }
//   server.listen(2346, () => {
//     console.log('server listening on port 2346');
//   });

let url = require('url');

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  console.log(req.url);
  console.log(parsedUrl);
  console.log(pathname);
  console.log(parsedUrl.query);
  console.log(parsedUrl.query.email);
  if (req.method === 'GET' && pathname === '/users') {
    res.setHeader('Content-Type', 'text/Html');
    res.write('<h1>Venkat<h1> <email>raj17270@gmail.com</email>');
    res.end();
  }
}
server.listen(2347, () => {
  console.log('server listening on port 2347');
});
