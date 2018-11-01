const User = require('../models/user');

// What is LOCALS?????????? - How Does It WORK?????????? What is res being used for here?????????? and HOW??????????
// Middleware to respond to all requests and check auth status
// first if checks if the session has an ID(only for logged in accounts). If there isn't one, it will be an empty string which is
// a falsie, therefore will prevent if statement code from running.  If there is, if will find the id, and get the object with all
// the users details
function checkAuthStatus(req, res, next) {
  console.log('Incoming request', req.method, req.originalUri);
  if (req.session.userId) {
    // The session (locker) has a user ID in it, innit!
    User.findById(req.session.userId)
      .then(user => {
        // user is an object! It represents a user from the database
        // We'd like to save it somewhere globally:
        res.locals.currentUser = user;
        res.locals.isLoggedIn = true;
        // We have finished. So invoke next:
        next();
      });
  } else {
    // When we have finished in this function, we must invoke next
    next();
  }
}

module.exports = {
  checkAuthStatus: checkAuthStatus
};
