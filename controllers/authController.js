const User = require('../models/user');

// REGISTER FORM
function registerFormRoute(req, res) {
  res.render('auth/register');
}

// Create user using login form for details.
function registerRoute(req, res) {
  User.create(req.body).then(() => res.redirect('/'));
}


function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email}).then(result => {
    if (!result) {
      res.redirect('/register');
    } else {
      req.session.userId = result._id;
      res.redirect('/');
    }
  });
}


function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/');
  });
}


module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
