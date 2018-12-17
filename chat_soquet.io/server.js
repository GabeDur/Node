var http = require('http');
var fs = require('fs');

function iniciar(){
	http.createServer(
	function(req, res){
		
		fs.readFile('plantilla.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
		});
	}
	)
	.listen(3000,"localhost");
		
	console.log("----server on----");
}

exports.iniserver= iniciar;