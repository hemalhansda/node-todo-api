var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};





























// var newTodo = new Todo({
//   text: 'Go for a Date',
// });

// var otherTodo = new Todo({
//   text: '       Edit this Video        '
// });
//
//
// // newTodo.save().then((doc) => {
// //   console.log('Saved todo', doc)
// // }, (e) => {
// //   console.log('Unable to save Todo');
// // });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to get todo');
// });
// var {mongoose} = require('./db/mongoose');
//
//
// var newUser = new User({
//   email: 'hemal.hansda25@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(doc);
// }, (err) => {
//   console.log('Unable to add data: ', err);
// });
