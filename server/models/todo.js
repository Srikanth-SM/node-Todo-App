const { mongoose } = require('../mongoose');

var Schema = mongoose.Schema; //assigning the mongoose.Schema class to Schema

var todo_schema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  }
});

var Todo = mongoose.model('todo', todo_schema);

module.exports = {
  Todo: Todo
};
