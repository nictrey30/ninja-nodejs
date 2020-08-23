const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

const todoController = require('./controllers/todoController');

app.set('view engine', 'ejs');
// static files
app.use('/assets', express.static(path.join(__dirname + '/assets')));

// fire controllers
todoController(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
