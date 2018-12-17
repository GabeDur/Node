var exec = require("child_process").exec;

function inicio(res){
	console.log("han llamado a inicio");
	
	exec("ls -lah" , function(error, stdout, stderr){
		res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
		res.write("<h1>estas en inicio</h1>" + stdout);
		res.end();
	});
}

function subir(res){
	console.log("han llamado a subir");
	res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
	res.write("<h1>estas en subir</h1>");
	res.end();
}

exports.inicio = inicio;
exports.subir = subir;