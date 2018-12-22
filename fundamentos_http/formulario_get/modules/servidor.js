var pagina = require('./pagina.js');

function iniciar(http, url){
	
	http.createServer(function(req, res){
		
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(pagina.servir(url, req));
		
	}).listen(3000);
	
	console.log("servidor funcionando");
	
}


exports.iniciar=iniciar;