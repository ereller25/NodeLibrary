// Route Parameters
// 

//building off 1.17

var express = require('express');

var app = express();



app.get('/', function(req, res){
	res.send('this actually works!');
});

app.get('/contactpage', function(req, res){
	res.send('Contact page');
});

app.get('/profile/:id', function(req, res){
	res.send('You requested to see a profile with the id of ' + req.params.id);
}); //req.params will refer to the following part, which is id, and will put that name at the end of the string





app.listen(3000);