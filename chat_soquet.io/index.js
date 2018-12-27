var express=require('express');
var http=require('http');
var path=require('path');
var servidor=require('./modules/servidor')
var rutas = require('./modules/rutas');

var app=express();

app.use(express.static('./public'));

servidor.levantar(app, http, path);

rutas.servir(app, path);