// Readable Streams -- let node read data from a stream 
// Writeable Streams -- let node write data to a stream
// Duplex - read and write to a stream

var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// takes the data and writes it somewhere, in this case writeMe.txt, a new file it creates
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');



myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	//creates the new writeMe.txt file
	myWriteStream.write(chunk);
});