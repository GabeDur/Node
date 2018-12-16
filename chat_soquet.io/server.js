var http = require('http');

function iniciar(){
	http.createServer(
	function(req, res){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end("hola");
		}
	)
	.listen(3000,"localhost");
		
	console.log("----server on----");
}

exports.iniserver= iniciar;