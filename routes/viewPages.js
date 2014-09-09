var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/register', function(req, res) {
  res.render('register');
});

router.get('/asd', function(req, res) {
  res.render('asd');
});


router.get('/events', function(req, res) {
  res.render('events');
});

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
