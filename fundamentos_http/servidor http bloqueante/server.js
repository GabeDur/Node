var http = require('http');

/*
*mudulo url nos permite extraer las partes de una url
*/
var url = require('url');

/*
*mudulo querystring nos permite parsear el string de la consulta(query)
*/

function iniciar(funcDir, varManej){
	http.createServer(
	function(req, res){
		var direccion = url.parse(req.url).pathname;
		console.log("***********************");
		console.log("se solicito: " + direccion);
		
		/*funcion para el routeo*/
		var contenido = funcDir(varManej, direccion);
		
		res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
		res.write(contenido);
		res.end();
		}
	)
	.listen(3000,"localhost");
		
	console.log("----server on----");
}

exports.iniserver= iniciar;