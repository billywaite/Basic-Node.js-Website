//require dependencies
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//route for the homepage
router.get('/', function(req, res) {
	res.render('pages/index');
});

//route for the about page
router.get('/about', function(req, res) {
	res.render('pages/about');
});

//route for the contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});