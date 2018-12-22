var servidor = require('./modules/servidor');
var http = require('http');
var url = require('url');

servidor.iniciar(http, url);

