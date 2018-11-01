const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const environment = require('./config/environment');
const port = environment.port;
const bodyParser = require('body-parser');
const router = require('./config/routes');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// Session is needed to keep a record of who's logged in.
const session = require('express-session');
const auth = require('./lib/auth');

mongoose.connect(environment.dbUri);

app.use(methodOverride('_method'));

// What does this line do?
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));

// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);

// We need this to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Send static files like .js .css .png etc. from the public folder:
app.use(express.static('public'));





app.use('*', auth.checkAuthStatus);


app.use(router);

app.listen(port, () => console.log(`Listening for changes on port ${port}`));
