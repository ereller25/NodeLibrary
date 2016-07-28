// Pipes
// Streamlines the process to take data from read stream to a write stream
// Automatic process that reads and writes for us


var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//Piping - have to pipe from a readable stream, so myReadStream here
myReadStream.pipe(myWriteStream);

//Integrating into a server:
var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + 'readMe.txt', utf8);
	myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
// Will post the data of readMe.txt on the webpage via a stream
