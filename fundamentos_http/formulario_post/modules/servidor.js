var pagina = require('./pagina.js');
var querystring = require('querystring');

function iniciar(http, url){
	
	http.createServer(function(req, res){
		if (req.method=='POST'){
			var datos="";
			var valor='';
			req.on('data', function(trozo){
				datos+=trozo;
				});
			req.on('end', function(){
			//recuperamos el valor
				var query = querystring.parse(datos);
				valor=query.nombre;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(pagina.servir(valor));
				});
		}else{
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(pagina.servir());
		}
		
	}).listen(3000);
	
	console.log("servidor funcionando");
	
}


exports.iniciar=iniciar;