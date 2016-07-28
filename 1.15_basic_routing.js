var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log("request was made" + req.url);
	if(req.url === '/home' || req.url === '/'){
		// if user requests homepage, then stream the html page we created
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if(req.url === '/api/ninjas'){
		//if we want to send some JSON or API endpoint
		var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
		//more likely to get above from a database than build it in
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(ninjas));
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
		// 404 page not created for this demo
	}

});

server.listen(3000, '127.0.0.1');