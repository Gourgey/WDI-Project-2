const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
