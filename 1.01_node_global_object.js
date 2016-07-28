// Global Object
	//built in objects that can be easily called

//Callback
setTimeout(function(){
	console.log('3 seconds passed.');
}, 3000);


var time = 0;

setInterval(function(){
	time += 2;
	console.log(time + 'seconds have passed.');
}, 2000);


//Handy tools to know
 console.log(__dirname);
 console.log(__filename);