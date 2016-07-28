//fs Module

//Uses read.txt

var fs = require('fs');

//Synchronous method - will complete and then move on

//2 parameters
//1 filename & 2 character encoding
var readText = fs.readFileSync('read.txt', 'utf8');
console.log(readText);


fs.writeFileSync('writeMe.txt', readText);



//Asynch version - It will start to read and move on.
fs.readFile('asyncread.txt', 'utf8', function(err, data){
	console.log(data);
});

//Notice that this shows first in the console.
console.log('test');


fs.readFile('asyncread.txt', 'utf8', function(err, data){
	fs.writeFile('asyncwrite.txt', data);
});
