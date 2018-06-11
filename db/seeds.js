require('dotenv').config();

const mongoose = require('mongoose');
const user = require("../models/Users");

/// Connect to Database
mongoose.connect('mongodb://localhost/Foodie-Roadmap')
  .then(() => {
      console.log('connected to mongoDB')
  })
  .catch((err) => {
      console.log('ERROR', err)
  })
    // <--- Remove old user Data --->
    user.remove()
  .then(() => {

    // <--- create new test user data --->
    const user1 = new user({
      name: 'Xavier',
      username: 'thecoolest1',
      address: '123 this st., Atlanta, GA ',
      email_address: 'xa@thismail.com',
      userID: 1
    })
    const user2 = new user({
      name: 'Sean Connery',
      username: 'theReal007',
      address: '123 this st., Atlanta, GA ',
      email_address: 'sc@thismail.com',
      userID: 2
    })
    const users = [ user1, user2, ]
      // <--- save test data --->
      return user.insertMany(users)
    .then(() => {
        // <--- close the database --->
        mongoose.connection.close()
    })
})
