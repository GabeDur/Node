//nuestro archivo sever.js
var server = require('./server');

//nuestro archivo router.js
var router = require('./router');

var manejadorReq = require('./manejadorReq');

var manejador={}
manejador["/"]=manejadorReq.inicio;
manejador["/inicio"]=manejadorReq.inicio;
manejador["/subir"]=manejadorReq.subir;


server.iniserver(router.direccionar, manejador);