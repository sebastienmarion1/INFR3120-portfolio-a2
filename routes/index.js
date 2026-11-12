var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sebastien Marion' });
});

/* About me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
