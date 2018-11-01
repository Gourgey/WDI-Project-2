const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: String,
  ingredients: [String],
  image: String,
  reviews: [{
    username: String,
    rating: Number,
    comment: String,
    date: Date
  }]
});

const dishModel = mongoose.model('Dish', dishSchema);



module.exports = dishModel;
