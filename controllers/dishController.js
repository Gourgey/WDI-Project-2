const Dish = require('../models/dish');


// INDEX - The render line is accessing the file dishes/index so the / before dishes isn't needed unlike redirect.
// Why am I making this dishObject and what is it used for?
function indexRoute(req, res) {
  // Find all the dishes, then render an ejs file:
  // Find returns an array
  Dish.find().then(function(result) {
    const dishObject = {
      dishes: result
    };
    res.render('dishes/index', dishObject);
  });
}


// NEW
function newRoute(req, res) {
  res.render('dishes/new');
}

// CREATE - the new route's form that the user enters details into becomes req.body.
// Also, result here is an object that contains the details from the form and
function createRoute(req, res) {
  Dish.create(req.body).then(result => res.redirect(`/dishes/${result._id}`));
}

// SHOW - Req.params.id is the id of the object we are trying to access, we then use that ID
// to get the whole object with all it's info and thats what 'result' is.
// Also, what is req.params? why not req.body.id or is that only for a form just posted.
function showRoute(req, res) {
  Dish.findById(req.params.id).then(result =>{
    res.render('dishes/show', result);
  });
}


// EDIT
function editRoute(req, res) {
  Dish.findById(req.params.id).then(result => {
    res.render('dishes/edit', result);
  });
}

// UPDATE - Why req.params AND req.body
function updateRoute(req, res) {
  Dish.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.redirect('/dishes');
  });
}


// delete
function deleteRoute(req, res) {
  Dish.findByIdAndDelete(req.params.id).then(() => {
    res.redirect('/dishes');
  });
}



module.exports = {
  indexRoute: indexRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  showRoute: showRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
