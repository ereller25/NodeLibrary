var http = require('http');


var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	res.writeHead(200, {'content-type':'text/plain'});
	res.end('Hey friends');
});


//local host & local address
server.listen(3000, "127.0.0.1");
console.log("Listening on port 3000, dawg.");




//////// -----------REQUEST --------->////////////
////////	request + request headers ////////////
//CLIENT 							   SERVER/////
//////// <----------RESPONSE ---------////////////
////////	res. data + res. headers  ////////////


//Data comes with headers
//Extra info about req. or response
//Tells browser a little more about doc., but doesn't show

//content-type -plain text, html, or json
//status - 200, 404, etc.