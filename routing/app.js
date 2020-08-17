const http = require('http');
const fs = require('fs');

const createStream = (page) => fs.createReadStream(`${__dirname}/${page}.html`);

const server = http.createServer((req, res) => {
  console.log(`request was made: ${req.url}`);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let myReadStream = createStream('index');
    myReadStream.pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let myReadStream = createStream('contact');
    myReadStream.pipe(res);
  } else if (req.url === '/api/ninjas') {
    let ninjas = [
      { name: 'ryu', age: 29 },
      { name: 'yoshi', age: 32 },
      { name: 'gicutza', age: 27 }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    createStream('404').pipe(res);
  }
});

server.listen(3000, 'localhost');
console.log('listening on port 3000');
