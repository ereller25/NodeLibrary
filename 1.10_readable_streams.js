// Readable Streams -- let node read data from a stream 
// Writeable Streams -- let node write data to a stream
// Duplex - read and write to a stream

var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt'); 
// Above will just print the buffer chunks, not the actual text
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// Above will display the actual chunks due to 'utf8'

// This lets us listen to each chunk of data passed
myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	console.log(chunk);
});