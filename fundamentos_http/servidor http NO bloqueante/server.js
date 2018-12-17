var http = require('http');

/*
*mudulo url nos permite extraer las partes de una url
*/
var url = require('url');

function iniciar(funcDir, varManej){
	http.createServer(
	function(req, res){
		var direccion = url.parse(req.url).pathname;
		console.log("***********************");
		console.log("se solicito: " + direccion);
		
		/*funcion para el routeo*/
		funcDir(varManej, direccion, res);
		}
	)
	.listen(3000,"localhost");
		
	console.log("----server on----");
}

exports.iniserver= iniciar;