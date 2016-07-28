var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	res.writeHead(200, {'content-type':'application/json'}); //change file type
	//dont use read/write
	var myObj = {
		name: 'Evan',
		job: 'Journalist',
		age: 31
	};
	//have to convert the object to a string - use JSON.stringify
	res.end(JSON.stringify(myObj));
});


server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");