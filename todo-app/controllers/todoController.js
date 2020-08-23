// let data = [
//   { item: 'get milk' },
//   { item: 'walk the dog' },
//   { item: 'kick some coding ass' }
// ];

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mongoose = require('mongoose');

// connect to the database
mongoose
  .connect(
    'mongodb+srv://test:test@ninja-todo-cluster.j8elo.mongodb.net/todo?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log('DB Connected!'))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

// create Schema for our data
const todoSchema = new mongoose.Schema({
  item: String
});

// the model name 'Todo' will be stored as a collection
const Todo = mongoose.model('Todo', todoSchema);

// let item1 = Todo({ item: 'buy flowers - test' }).save(function (err) {
//   if (err) throw err;
//   console.log('item saved');
// });

module.exports = function (app) {
  // set-up the request handlers
  app.get('/todo', (req, res) => {
    // get data from mongodb and pass it to the view
    // pass an empty object to retrieve all the items in the colection
    Todo.find({}, function (err, data) {
      if (err) throw err;
      res.render('todo', { todos: data });
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    // get data from the view and add it to mongodb
    const newTodo = Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', (req, res) => {
    // delete the requested item from mongodb
    Todo.find({ item: req.params.item.replace(/\-/g, ' ') }).remove(function (
      err,
      data
    ) {
      if (err) throw err;
      res.json(data);
    });
  });
};
