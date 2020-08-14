//Generally the module name and the variable name both are same
const fs = require('fs');

// fs.readFileSync
// const sample = fs.readFileSync('readMe.txt', 'utf8');
// console.log(sample);

// fs.writeFileSync('writeMe.txt', sample);

fs.readFile('readMe.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let replacementText = data.replace(/read/gi, 'wrote');
  fs.writeFile('writeMe.txt', replacementText, (err) => {
    if (err) throw err;
    console.log('file written');
  });
});
