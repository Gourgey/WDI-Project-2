const mongoose = require('mongoose');
const environment = require('../config/environment');
const Dish = require('../models/dish');
mongoose.connect(environment.dbUri);

// Delete existing data first
Dish.collection.drop();

const dishData = [
  {
    name: 'Donburi',
    ingredients: ['rice', 'anything'],
    image: 'https://www.japan-guide.com/g7/2043_donburi.jpg'
  }
];

Dish.create(dishData)
  .then(result => {
    console.log(`Created ${result.length} dishes!`);
    mongoose.connection.close();
  });
