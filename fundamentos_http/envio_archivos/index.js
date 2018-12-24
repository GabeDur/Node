var servidor = require('./modules/servidor');
var http = require('http');

//formidable es necesario para poder subir y guardar archivos al servidor
var formidable = require('formidable');

servidor.iniciar(http, formidable);

