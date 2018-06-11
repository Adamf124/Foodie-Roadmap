var express = require('express');
var router = express.Router();

/* GET users listing. */
// localhost/user
router.get('/', (req, res, next) => {

  // Find all users
  user.find()
    .then((listAllusers) => {

      res.render('user/index', { listAllusers: listAllusers })
    })
    .catch((err) => res.send(err))

});

module.exports = router;
