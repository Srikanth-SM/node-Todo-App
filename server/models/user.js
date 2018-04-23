const { mongoose } = require('../mongoose');

var user_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var User = mongoose.model('User', user_schema);

module.exports = {
  User: User
};
