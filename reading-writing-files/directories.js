const fs = require('fs');

// create dir
// fs.mkdirSync('stuff');

// delete dir
// fs.rmdirSync('stuff');

// Creates /stuff/apple, regardless of whether `/stuff` exist.
// Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
fs.mkdir('./stuff/apple', { recursive: true }, (err) => {
  if (err) throw err;
  fs.readFile('readMe.txt', 'utf-8', (err, data) => {});
});
