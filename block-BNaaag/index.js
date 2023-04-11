let fs = require('fs');

let filepath = 'content.md';

fs.readFile(filepath, (err, content) => {
  console.log(content);
});

var sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//async code

fs.readFile(filepath,(err, data) => {
  console.log(err);
});

let sum1 = 0;
for (let i = 1; i <= 15; i++) {
  sum1 = sum1 + i;
}

console.log('Sum: ', sum1);



let buff1 = Buffer.alloc(10);
buff1.write("welcome to buffer");
buff1.toString();
console.log(buff1);