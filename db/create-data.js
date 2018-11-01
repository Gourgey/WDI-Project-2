const mongoose = require('mongoose');
const environment = require('../config/environment');
const Dish = require('../models/dish');
mongoose.connect(environment.dbUri);

// Delete existing data first
Dish.collection.drop();

const dishData = [
  {
    name: 'Sushi (すし, 寿司, 鮨)',
    ingredients: ['Rice', 'Fish', 'Vegetable'],
    image: 'https://theculturetrip.com/wp-content/uploads/2015/12/shutterstock_394084948.jpg',
    description: 'Sushi dates all the way back to the 4th Century BC, as a way to preserve the fish (sprinkled with salt and encased in rice). Tokyo has some of the best Sushi restaurants in the world. You will however not find fresher Sushi than from the Sushi shops found around the Tsukiji Fish Market in Tokyo.'
  },
  {
    name: 'Ramen (ラーメン)',
    ingredients: ['Noodles', 'Egg', 'Pork', 'Cabbage', 'Soy'],
    image: 'https://img.taste.com.au/uww25_OK/w720-h480-cfill-q80/taste/2017/08/beeframen-129052-1.jpg',
    description: 'Shoyu Ramen is the most common type of Ramen. This is usually what is served when the menu does not specify a specific type of soup. Shoyu Ramen is clear, brown broth flavored noodle soup with soy sauce (shoyu). The soup is usually made of chicken broth but often contains other meats such as pork, beef or fish depending on the region. It usually also contains hard-boiled egg and different vegetables, such as onion, mushrooms, bean sprouts, seaweed, and corn.'
  },
  {
    name: 'Tempura (天ぷら)',
    ingredients: ['Any Ingredient', 'Fry'],
    image: 'https://static01.nyt.com/images/2013/10/23/dining/23JPFLEX1/23JPFLEX1-articleLarge.jpg',
    description: 'Tempura is chunks of seafood and vegetables dipped in a light batter and cooked in canola and sesame oil. The end result is far less stodgy than other deep-fried food that we have in the West.'
  },
  {
    name: 'Okonomiyaki (お好み焼き)',
    ingredients: ['Cabbage'],
    image: 'https://image.excite.co.jp/jp/erecipe/recipe/9/b/9b9b440f2e2ae488fabe8f03f49ca010/55c02ba4a72fb665e62019ba772d5b66.jpeg',
    description: 'It is pan fried and consists of batter and cabbage. Different toppings and ingredients are added, anything from sliced meat and seafood to wasabi and cheese. This variability is what gave it it`s name “Okonomi”, which means “to one’s liking”.'
  },
  {
    name: 'Yakitori (焼き鳥)',
    ingredients: ['Chicken', 'Vegetables'],
    image: 'http://jpninfo.com/wp-content/uploads/2015/08/Fotolia_134177068_Subscription_Monthly_M.jpg',
    description: 'The Japanese version of barbecue, which invites diners to cook slices of meat and vegetables on a plate or griddle in the middle of the table. Beef and offal are the most popular options at restaurants, but also pork, chicken, and seafood are usually on the menu'
  },
  {
    name: 'Udon (うどん)',
    ingredients: ['Thick Noodles', 'Meat', 'Egg', 'Vegetables'],
    image: 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201003-xl-slow-cooker-ginger-beef-noodle-soup.jpg?itok=lkCr0Ai4',
    description: 'Thick white noodles made of wheat flour. They are thicker than Soba and Ramen noodles, whiter and chewier. Udon is very popular and available at specialty Udon restaurants (Udon-Ya) all over Japan, which usually also serve Soba noodles. Udon is served both hot and cold, with or without soup, and sometimes with vegetables, egg and meat.'
  },
  {
    name: 'Gyoza (うどん)',
    ingredients: ['Meat or Vegetable Filling'],
    image: 'https://lh3.googleusercontent.com/OvG6vlaYsacL2rNWNet6f6z-GAbEmMFkrhb3-ZBHrBtmsuhvYg0FF-13J3s5LmgjPs8-v0gadJFE9lst7wK8HdqsIhCGzECekAxr2tY=w600-l68',
    description: 'Japan does not really have a “street-food” culture as other Asian countries like Thailand, but Gyoza or Steamed Dumplings are the sort of food that you will find sold at street stalls around Japan and at train stations. It is originally Chinese but has become very popular all over Japan.'
  },
  {
    name: 'Taiyaki (鯛焼き)',
    ingredients: ['Meat or Vegetable Filling'],
    image: 'https://keeprecipes.com/sites/keeprecipes/files/imagecache/recipe_large/ki-taiyaki-oishii.jpg',
    description: 'Literally meaning "baked sea bream", Taiyaki is a Japanese fish-shaped cake. It imitates the shape of Tai (Japanese red seabream). It is also the origin of the name. The most common filling is red bean paste that is made from sweetened azuki beans. Other common fillings may be custard, chocolate, cheese, or sweet potato. Some shops even sell taiyaki with okonomiyaki, gyoza filling, or a sausage inside.'
  }
];

Dish.create(dishData)
  .then(result => {
    console.log(`Created ${result.length} dishes!`);
    mongoose.connection.close();
  });
