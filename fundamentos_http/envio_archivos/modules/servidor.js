var subida= require('./subida');

function iniciar(http, formidable){
	http.createServer(function(req , res){
		if(req.method=='POST'){
			//Creamos una instancia de IncomingForm.
			var incoming = new formidable.IncomingForm();
			//Carpeta donde se guardarán los archivos.
			incoming.uploadDir = 'subidos';
			//Parseamos la petición.
			incoming.parse(req);
			//Se dispara en caso de que haya algún error.
			incoming.on('error', function(err) {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(subida.responderSubida(false));
			});
//////////////**/////			//Se dispara cuando el archivo llegó al servidor.
			incoming.on('file', function(field, file){
					console.log('Archivo recibido');
			});
			//Se dispara antes de guardar el archivo.
			incoming.on('fileBegin', function(field, file){
				if(file.name){
					console.log('field tiene: ' + file);
					console.log('field.name tiene: ' + file.name);
					//Modificamos el nombre del archivo por código al azar más "_nombre original del archivo"
					console.log('field.path tiene: ' + file.path);
					file.path += '_' + file.name;
					console.log('field.path ahora tiene: ' + file.path);
				}
			});
			//Se dispara una vez que los archivos fueron guardados.
			incoming.on('end', function(){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(subida.responderSubida(true));
			});
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(subida.dibujarFormulario());
		}
		
	
	}).listen(3000);
	
	console.log("funcionando en el 3000");
}

exports.iniciar=iniciar;