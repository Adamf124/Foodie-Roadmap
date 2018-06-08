require('dotenv').config();

const mongoose = require('mongoose');
const Schema = require("./schema.js");

mongoose.connect(process.env.MONGODB_URI)