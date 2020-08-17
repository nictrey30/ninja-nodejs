const http = require('http');
const fs = require('fs');

let myReadStrem = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// we can only use pipe on readable streams
myReadStrem.pipe(myWriteStream);
