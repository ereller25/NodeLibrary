// Serving HTML Pages
// How to send HTML rather than a .txt file

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	res.writeHead(200, {'content-type':'text/html'}); //change to html so it knows the file type
	var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8'); //obviously change the reference file
	myReadStream.pipe(res);
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");