const fs = require('fs');

// create dir
// fs.mkdirSync('stuff');

// delete dir
// fs.rmdirSync('stuff');

// Creates /stuff/apple, regardless of whether `/stuff` exist.
// Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
// fs.mkdir('../directories/stuff/apple', { recursive: true }, (err) => {
//   if (err) throw err;
//   fs.readFile('readMe.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     let replacementText = data.replace(/read/gi, 'wrote');
//     fs.writeFile(
//       '../directories/stuff/apple/writeMe.txt',
//       replacementText,
//       (err) => {
//         if (err) throw err;
//         console.log('file written');
//       }
//     );
//   });
// });

// we cant remove a directory without being empty
//  If true, perform a recursive directory removal. In recursive mode, errors are not reported if path does not exist, and operations are retried on failure. Default: false.
fs.rmdir('../directories/stuff', { recursive: true }, (err) =>
  console.log(err)
);
