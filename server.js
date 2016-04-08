var express = require('express'),
	app = express(),
	exports = module.exports = {};

app.get('/', function(req, res) {
	 // if we replace 'Hello World!' with 'Hi Mom!', Jasmine test fails
	res.send('Hello World');
});

var server = app.listen(3000, function() {
	console.log('Magic is happening on port 3000!');
});

exports.closeServer = function() {
	server.close();
};