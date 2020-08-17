const http = require('http');

let server = http.createServer((req, res) => {
  console.log(`request was made ${req.url}`);
  // whenever we send a request to the server, the the function will fire.accordion
  // The function takes 2 params: the request and response object
  // the request object comes loaded with details about the request that has been made
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Het Ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
