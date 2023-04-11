var url = require('url');
let parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
  true
);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

let parsedUrl1 = url.parse(
  'https://chrome://new-tab-page/chrome_cart.mojom-webui.js',
  true
);

console.log(parsedUrl1);
console.log(parsedUrl1.pathname);
console.log(parsedUrl1.query);
console.log(parsedUrl1.host);
console.log(parsedUrl1.protocol);