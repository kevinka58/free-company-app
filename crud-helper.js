// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const FreeCompany = require('./models/freeCompany');

// Local variables will come in handy
let u, i, c, o;

