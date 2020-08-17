const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('request was made: ', req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let myObj = {
    name: 'Ryu',
    job: 'ninja',
    age: 29
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, 'localhost');
console.log('listening to port 3000');
