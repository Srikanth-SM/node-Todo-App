var express = require('express');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;

const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.port||3000;

//middleware used to populate req.body from the incoming request.
app.use(bodyParser.json());

// POST /todos
app.post('/todos', (req, res) => {
  //   console.log(req.body);
  var todo = new Todo(req.body);
  todo.save().then(
    result => {
      res.send(JSON.stringify(result, undefined, 2));
    },
    err => {
      res.status(400).send(err);
    }
  );
});

// GET /todos
app.get('/todos', (req, res) => {
  Todo.find().then(
    todos => {
      res.send(JSON.stringify(todos));
    },
    err => {
      res.status(200).send(err);
    }
  );
});

//GET /todos/123
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(404).send('Object id not valid');
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      // console.log(todo);
      res.status(200).send(todo);
    })
    .catch(e => {
      // console.log("errrererer",e);
      res.status(400).send({ message: e.message });
    });
});

var server = app.listen(port, (err, res) => {
  if (err) return console.log('server not started', err);
  console.log('server started at '+port);
});

var todo1 = new Todo({
  text: ''
});

// todo1.save().then(
//   res => {
// 	console.log('todo saved successfully', JSON.stringify(res, undefined, 2));
// 	throw new Error('srikanths error');
//   },
//   err => {
//     throw new Error(err);
//   }
// ).catch((err)=>{
// 	console.log("error",err);
// });

// var user1 = new User({
//   email: 'srinath.s@cts.com'
// });

// user1.save().then(
//   res => {
//     console.log('user saved successfully', res);
//   },
//   err => {
//     console.log('error in saving user', JSON.stringify(err, undefined, 2));
//   }
// );

module.exports = {
  app: app,
  server: server
};
