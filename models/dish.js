const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: String,
  ingredients: [String],
  image: String,
  description: String,
  reviews: [{
    username: String,
    rating: Number,
    comment: String,
    date: Date,
    image: String
  }],
  reviewCount: Number
});

const dishModel = mongoose.model('Dish', dishSchema);



module.exports = dishModel;
