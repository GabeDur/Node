var http = require('http');

/*
*mudulo url nos permite extraer las partes de una url
*/
var url = require('url');

function iniciar(funcDir, varManej){
	http.createServer(
	function(req, res){
		
		var datos = "";
		
		var direccion = url.parse(req.url).pathname;
		console.log("***********************");
		console.log("se solicito: " + direccion);
		
		req.setEncoding("utf-8");
		
		//evento data para cada trozo de información
		req.addListener("data", function(trozo){
			datos += trozo;
			console.log("trozo recibido: " + trozo);
			});
		
		//evento end para cuando han sido recibidos todos los trozos
		req.addListener("end", function(){
			/*funcion para el routeo*/
			funcDir(varManej, direccion, res, datos);
			});
		}
	)
	.listen(3000,"localhost");
		
	console.log("----server on----");
}

exports.iniserver= iniciar;