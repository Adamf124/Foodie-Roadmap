var express = require('express');
var router = express.Router();
const User = require('../models/Users')

/* GET users listing. */
// localhost/user
router.get('/', (req, res, next) => {

  // Find all users
  user.find()
  // then render out all data that match the user model.
    .then((listAllusers) => {

      res.render('user/index', { listAllusers: listAllusers })
    })
    .catch((err) => res.send(err))
// NEW Route
router.get('/new', (req, res) => {
  res.render('user/new')
})
});

module.exports = router;
