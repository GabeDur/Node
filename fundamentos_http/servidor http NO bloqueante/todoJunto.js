/*Se hace uso de el callback anónimo exec()
Esta vez en vez de llevar el contenido al servidor, llevaremos el servidor al contenido. 
Para ser más precisos, inyectaremos el objeto response (respuesta) (desde nuestra 
función de callback de servidor onRequest()) a través de nuestro router a los 
manipuladores de petición. Los manipuladores serán capaces de usar las funciones 
de este objeto para responder a las peticiones ellos mismos.
*/

var http = require('http');
var url = require('url');
var exec = require("child_process").exec;

//router
var router= function route(manejador, direccion, res){
			console.log("la direccion es: " + direccion);
			if (typeof manejador[direccion] === 'function') {
				
				//se llama a la funcion que esta dentro de manejadorReq.js
				manejador[direccion](res);
				
			}else{
				console.log("no se encontro funcion de ruta. " + typeof manejador);
				res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
				res.write("<h1 style='color: red'>404 Página no encontrada</h1>");
				res.end();
			}
			
		}
		
//manejador de peticiones
var ini = function inicio(res){
					console.log("han llamado a inicio");
					exec("ls -lah" , function(error, stdout, stderr){
						res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
						res.write("<h1>estas en inicio</h1>" + stdout);
						res.end();
					});
				}
var sub = function subir(res){
					console.log("han llamado a subir");
					res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
					res.write("<h1>estas en subir</h1>");
					res.end();
				}
				

var manejador={}
manejador["/"]=ini;
manejador["/inicio"]=ini;
manejador["/subir"]=sub;

	
//creacion server
var server = function iniciar(router, manejador){
						http.createServer(
						function(req, res){
							var direccion = url.parse(req.url).pathname;
							console.log("***********************");
							console.log("se solicito: " + direccion);
							
							/*funcion para el routeo*/
							router(manejador, direccion, res);
							}
						)
						.listen(3000,"localhost");
							
						console.log("----server on----");
					}



//ejecutamos todo
/*La siguiente linea se usa cuando queremos usar diretamente la funcion iniciar
iniciar(router,manejador );
*/
server(router, manejador);