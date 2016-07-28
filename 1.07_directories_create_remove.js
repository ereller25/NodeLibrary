var fs = require('fs');

//Deletes the file. 
//fs.unlink('writeMe.txt');


//Synchronous
//Add a directory
//fs.mkdirSync('stuff');

//Remove a directory
//fs.rmdirSync('stuff');

//Build a dir with a file
// fs.mkdir('stuff', function(){
// 	fs.readFile('read.txt', 'utf8', function(err, data){
// 		fs.writeFile('./stuff/write.txt', data);
// 	});
// });

//Won't work. Can't remove without a dir
//fs.rmdir('stuff');


//Removes the dir with a file in it.
// fs.unlink('./stuff/write.txt', function(){
// 	fs.rmdir('stuff');
// });