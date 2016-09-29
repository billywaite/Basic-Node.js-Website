//require dependencies
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//route for the homepage
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

//route for the about page
router.get('/about', function(req, res) {
	res.send('Hello World, I am the about page!');
});

//route for the contact page
router.get('/contact');
router.post('/contact');