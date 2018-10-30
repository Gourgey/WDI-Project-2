const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: String,
  ingredients: [String],
  image: String,
  reviews: [
    {
      username: String,
      comment: String,
      rating: Number
    }
  ]
});

const dishModel = mongoose.model('Dish', dishSchema);



module.exports = dishModel;
