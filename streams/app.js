const http = require('http');
const fs = require('fs');

// create readable stream which we can read data from
// createreadStrem inherits from the event emitter
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

// listen to the data event = whenever we receive a chunk of data
myReadStream.on('data', (chunk) => {
  console.log('new chunk received');
  // console.log(chunk);
  myWriteStream.write(chunk);
});

// create writable stream
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
