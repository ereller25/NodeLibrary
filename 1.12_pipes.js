// Pipes
// Streamlines the process to take data from read stream to a write stream
// Automatic process that reads and writes for us


var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//Piping - have to pipe from a readable stream, so myReadStream here
myReadStream.pipe(myWriteStream);

//