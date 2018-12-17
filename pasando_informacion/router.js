function route(variable, direcc, res, datos){
	console.log("la direccion es: " + direcc);
	if (typeof variable[direcc] === 'function') {
		
		//se llama a la funcion que esta dentro de manejadorReq.js
		variable[direcc](res, datos);
		
	}else{
		console.log("no se encontro funcion de ruta. " + typeof variable);
		res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
		res.write("<h1 style='color: red'>404 Página no encontrada</h1>");
		res.end();
	}
	
}

exports.direccionar=route;