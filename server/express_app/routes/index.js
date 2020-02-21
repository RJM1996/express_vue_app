var express = require('express');
var router = express.Router();
var nunjucks = require('nunjucks')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello.html', {name: 'nunjacks', title: 'express'})
});

module.exports = router;
