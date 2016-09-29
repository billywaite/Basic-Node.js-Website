//require dependencies
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//route for the homepage
router.get('/', function(req, res) {
	res.render('pages/home');
});

//route for the about page
router.get('/about', function(req, res) {
	var users = [
		{ name: 'Holly', email: 'holly@google.io', avatar: 'http://placekitten.com/300/300' },
		{ name: 'Chris', email: 'chris@google.io', avatar: 'http://placekitten.com/400/400' },
		{ name: 'Ado', email: 'ado@google.io', avatar: 'http://placekitten.com/500/500' },
		{ name: 'Nick', email: 'nick@google.io', avatar: 'http://placekitten.com/700/700' }
	];
	res.render('pages/about', { users: users });
});

//route for the contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});