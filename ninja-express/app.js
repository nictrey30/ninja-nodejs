const express = require('express');
const app = express();

const port = 3000;

// tell express that we want to use ejs as our view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', (req, res) => {
  // res.send('this is the contact page');
  res.sendFile(__dirname + '/contact.html');
});
app.get('/profile/:name', (req, res) => {
  // res.send(`You requested to see a profile of ${req.params.name}`);
  let data = {
    age: 29,
    job: 'ninja'
  };
  res.render('profile', { person: req.params.name, data });
});

app.listen(port, () => console.log(`listening app on port ${port}`));
