var express = require('express'),
	app = express(),
	exports = module.exports = {};

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(3000, function() {
	console.log('Magic is happening on port 3000!');
});