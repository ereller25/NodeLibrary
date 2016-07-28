// Express
// easy, flexible routing system
// does a ton of work for you including:
//		integrating with templating engines
//		has middleware framework
//	needs to be required like a module
var express = require('express');

// functions give access to all the express methods
var app = express();

// Responses to a Request:
//		GET, POST, DELETE, PUT - most common types
// Basic examples:
//	app.get('route', fn)
//	app.post('route', fn)
//	app.delete('route', fn)

app.get('/', function(req, res){
	res.send('this actually works!');
});

app.get('/contactpage', function(req, res){
	res.send('Contact page');
});


app.listen(3000);