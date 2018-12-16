function inicio(){
	console.log("han llamado a inicio");
	return "<h1>estas en inicio</h1>"
}

function subir(){
	console.log("han llamado a subir");
	return "<h1>estas en subir</h1>"
}

exports.inicio = inicio;
exports.subir = subir;