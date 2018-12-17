/*
*esta aplicación transporta el contenido desde el manejador de peticiones al servidor HTTP 
*retornándolo hacia arriba a través de las capas de la aplicación (manipulador de petición -> router -> servidor).
*Este archivo contine las funciones de servidor, manejador de rutas, y el propio router
*Este archivo solo es para mostrar mas claramente el manejo de ruteo pero lo correcto es separar cada funcion en modulos
*/

var http = require('http');
var url = require('url');

//router
var router= function route(manejador, direccion){
			console.log("la direccion es: " + direccion);
			if (typeof manejador[direccion] === 'function') {
				
				//se llama a la funcion que esta dentro de manejadorReq.js
				return manejador[direccion]();
				
			}else{
				console.log("no se encontro funcion de ruta. " + typeof manejador);
				return "<h1 style='color: red'>404 Página no encontrada</h1>";
			}
			
		}
//manejador de peticiones
var ini = function inicio(){
							console.log("han llamado a inicio");
							return "<h1>estas en inicio</h1>"
						}
var sub = function subir(){
					console.log("han llamado a subir");
					return "<h1>estas en subir</h1>"
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
							var contenido = router(manejador, direccion);
							
							res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
							res.write(contenido);
							res.end();
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