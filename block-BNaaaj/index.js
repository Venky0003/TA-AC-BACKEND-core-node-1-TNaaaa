console.log('Welcome to Nodejs');

let { readFile, unlink } = require('fs');
let os = require('os');
let freeM = os.freemem();
let cpus = os.cpus().length;

console.log(freeM, cpus);
readFile('./content.md', 'utf8', (err, content) => {
  console.log(content);
});

let buff1 = new Buffer.alloc(12);

let buff2 = new Buffer.from('Hello Buffer');

let url = require('url');
let parsedUrl = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit',
  true
);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);


