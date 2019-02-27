const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// Load Routes
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const recipes = require('./routes/api/recipes');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database Config
const db = require('./config/keys').mongoURI;

// Conncet to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/recipes', recipes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on port ${port}`));
