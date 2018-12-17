var queryString = require('querystring');

function inicio(res, datos){
	console.log("han llamado a inicio");
	
	var body = '<html>'+
						'<head>'+
						'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
						'</head>'+
						'<body>'+
						'<form action="/subir" method="post">'+
						'<textarea name="text" rows="10" cols="60"></textarea><br>'+
						'<input type="submit" value="Enviar texto" />'+
						'</form>'+
						'</body>'+
						'</html>';
	res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
	res.write(body);
	res.end();
	}

function subir(res, datos){
	console.log("han llamado a subir");
	res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
	//res.write("<h1>recibimos los soguientes datos:</h1>" + datos);
	res.write("<h1>recibimos los soguientes datos:</h1>" + queryString.parse(datos)["text"]);
	res.end();
}

exports.inicio = inicio;
exports.subir = subir;