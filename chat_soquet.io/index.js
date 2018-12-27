var express=require('express');
var path=require('path');
var servidor=require('./modules/servidor')
var rutas=require('./modules/rutas');

var app=express();

servidor.levantar(app, express);

rutas.servir(app, path);

/*
app.get('/', function(req, res){
		res.send('hola');
	});
*/