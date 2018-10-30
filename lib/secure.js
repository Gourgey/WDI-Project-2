// If user is logged in, let them continue, otherwise redirect them to the login page.
function secureRoute(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Can just module.exports the function itself!
module.exports = secureRoute;
