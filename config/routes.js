const dishController = require('../controllers/dishController');
const authController = require('../controllers/authController');
const reviewsController = require('../controllers/reviewsController');
const router = require('express').Router();
const secureRoute = require('../lib/secure');

// REGISTER - Form and Post routes
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

// LOGIN - Form and Post routes
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

// LOGOUT
router.get('/logout', authController.logoutRoute);

// HOME
router.get('/', function(req, res) {
  res.render('pages/home');
});

// ABOUT
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// PROFILE
router.get('/profile', function(req, res) {
  res.render('pages/profile');
});


// INDEX
router.get('/dishes', dishController.indexRoute);


// NEW -- NOTE: This must appear above the show route, otherwise the show route will load with id = 'new' -- HMMMMMMMMMMMMMMMM?????????????
router.get('/dishes/new', secureRoute, dishController.newRoute);

// CREATE - Listens for POST requests to /cocktails
router.post('/dishes', secureRoute, dishController.createRoute);


// SHOW
router.get('/dishes/:id', dishController.showRoute);


// EDIT
router.get('/dishes/:id/edit', secureRoute, dishController.editRoute);

// UPDATE
router.put('/dishes/:id', secureRoute, dishController.updateRoute);


// DELETE
router.delete('/dishes/:id', secureRoute, dishController.deleteRoute);


// REVIEWS - CREATE
router.post('/dishes/:id/reviews', secureRoute, reviewsController.createRoute);

// REVEIWS - DELETE
router.delete('/dishes/:id/reviews/:reviewId', secureRoute, reviewsController.deleteRoute);

// Why don't I have to export each function - is it becuase of the .Router() line at the top? If so, why not do for all pages?
module.exports = router;
