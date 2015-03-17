var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send("POST done");
});

router.put('/', function(req, res, next) {
  res.send("PUT done");
});

router.delete('/', function(req, res, next) {
  res.send("UPDATE done");
});

module.exports = router;
