require('dotenv').config();

const mongoose = require('mongoose');
const Schema = require("./schema.js");

/// Connect to Database
mongoose.connect('mongodb://localhost/Foodie-Roadmap')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })
