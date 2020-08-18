const express = require('express');
const app = express();
const port = 3000;

// tell express that we want to use ejs as our view engine
app.set('view engine', 'ejs');
// app.use('/assets', (req, res, next) => {
// is logging the url after /assets
//   console.log(req.url);
//   next();
// });

// express.static() - middleware for serving up static files. Inside of it we want to do is to map the path to the folder where the static files are stored
// any request that is going to /assets is going to map to that folder
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
  res.render('index');
});
app.get('/contact', (req, res) => {
  // res.send('this is the contact page');
  // res.sendFile(__dirname + '/contact.html');
  res.render('contact');
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
