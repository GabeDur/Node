function route(variable, direcc){
	console.log("la direccion es: " + direcc);
	if (typeof variable[direcc] === 'function') {
		
		//se llama a la funcion que esta dentro de manejadorReq.js
		return variable[direcc]();
		
	}else{
		console.log("no se encontro funcion de ruta. " + typeof variable);
		return "<h1 style='color: red'>404 Página no encontrada</h1>";
	}
	
}

exports.direccionar=route;