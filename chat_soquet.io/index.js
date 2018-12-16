var server = require('./server');
var fs = require('fs');

/*
var server = http.createServer(function (req, res){
	fs.readFile("./plantilla.html",  function(error, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data, "utf-8");
		
		console.log("*****************************");
		console.log(data);
		console.log("*****************************");
		
		});
	}).listen(3000, "localhost");
	
console.log("escuchando");

*/

server.iniserver();