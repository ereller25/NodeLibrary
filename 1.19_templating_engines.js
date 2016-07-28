// Template Engines
// building off 1.17, 1.18
// JavaScript templates are a method of separating HTML structure from the content contained within

var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //to set the view engine, using ejs for this demo


// To send to a html file - changed sendFile to render for .ejs partial templates
app.get('/', function(req, res){
	res.render('index');
	//res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	//res.send(__dirname + '/contact.html');
	res.render('contact');
});

//What about data from a database? - can use ejs, a view engine
// npm install ejs -save // -save saves it as a dependency
// use render for template engines

app.get('/profile/:id', function(req, res){
	res.render('profile', {person: req.params.id}); //in the html use <%= person %> to place the profile id
});
// SEE: views/profile.ejs file for more


// to insert more data into the view
app.get('/profile/:id', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['cooking', 'fighting', 'lifting']};
	res.render('profile', {person: req.params.id, data: data});
});


app.listen(3000);