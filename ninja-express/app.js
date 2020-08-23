const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// tell express that we want to use ejs as our view engine
app.set('view engine', 'ejs');
// app.use('/assets', (req, res, next) => {
// is logging the url after /assets
//   console.log(req.url);
//   next();
// });

// express.static
// express.static() - middleware for serving up static files. Inside of it we want to do is to map the path to the folder where the static files are stored
// any request that is going to /assets is going to map to that folder
// To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
// app.use('/static', express.static('public'))
// Now, you can load the files that are in the public directory from the /static path prefix.
// However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.render('index');
});
app.get('/contact', (req, res) => {
  // res.send('this is the contact page');
  // res.sendFile(__dirname + '/contact.html');
  console.log(req.query);
  res.render('contact', { q: req.query });
});

app.post('/contact', urlencodedParser, (req, res) => {
  // console.log(req.body);
  res.render('contact-success', { data: req.body });
});
app.get('/profile/:name', (req, res) => {
  // res.send(`You requested to see a profile of ${req.params.name}`);
  let data = {
    age: 29,
    job: 'ninja',
    hobbies: ['fighting', 'learning', 'eating']
  };
  res.render('profile', { person: req.params.name, data });
});

app.listen(port, () => console.log(`listening app on port ${port}`));
