var express = require('express');
var router = express.Router();
const User = require('../models/Users')

/* GET users listing. */
// localhost/user
router.get('/', (req, res, next) => {

  // Find all users
  User.find()
  // then render out all data that match the user model.
    .then((listAllusers) => {

      res.render('users/index', { listAllusers: listAllusers })
    })
    .catch((err) => res.send(err))
});
// NEW Route
router.get('/new', (req, res) => {
  res.render('users/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newUser = req.body
  User.create(newUser)
    .then(() => {
      res.redirect('/users')
    })
})
// SHOW Route
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((individualUser) => {
      res.render('users/show', { individualUser })
      console.log(individualUser)
    })
})
// EDIT Route
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((doThis) => {
      res.render('users/edit', { individualUser: doThis })
    })
})
module.exports = router;
