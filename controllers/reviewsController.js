const Dish = require('../models/dish');

function createRoute(req, res) {
  // MUST BE req.params.id NOT req.params.Id!!!!!!!!!!!!!!!
  Dish.findById(req.params.id).then(dish => {
    dish.reviews.push(req.body);
    dish.save().then(result => res.redirect(`/dishes/${result._id}`));
  });
}

function deleteRoute(req, res) {
  Dish.findById(req.params.id).then(dish => {
    dish.reviews.id(req.params.reviewId).remove();
    dish.save().then(result => res.redirect(`/dishes/${result._id}`));
  });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
