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
    // <--- Remove old user Data --->
    user.remove()
  .then(() => {

    // <--- create new test user data --->
    const user1 = new user({
      name: 'Xavier',
      address: '123 this st., Atlanta, GA ',
      email_address: 'xa@thismail.com',
      userID: 1
    })
    const user2 = new user({
      name: 'Sean Connery',
      address: '123 this st., Atlanta, GA ',
      email_address: 'sc@thismail.com',
      userID: 2
    })
    const users = [ user1, user2, user3, user4 ]
      // <--- save test data --->
      return user.insertMany(users)
    .then(() => {
        // <--- close the database --->
        mongoose.connection.close()
    })
})
