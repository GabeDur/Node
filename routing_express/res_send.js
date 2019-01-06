express = require('express');

app=express();

//el parametro de send puede ser:
//un objeto de tipo Buffer
//una cadena (se considera de tipo text/html)
//un objeto
//un array
app.get('/buffer', function(req, res){
		res.send(new Buffer('whoop'));
	});
app.get('/json',function(req, res){
		res.send({
			nombre:'Gabriel',
			apePater:'Duran',
			edad:34
		});
	});
app.get('/cadena', function(req, res){
		res.send('soy una cadena');
	});
app.get('/find', function(req, res){
		res.status(404).send('página no encontrada');
	});
app.get('/error', function(req, res){
		res.status(500).send({error: 'algo salio mal'});
	});

//html
app.get('/html', function(req, res){
		res.set('Content-Type', 'text/html');
		res.send('<h1>HTML</h1>');
	});

//Status
app.get('/ok',function(req, res){
		res.sendStatus(200); // equivalent to res.status(200).send('OK')
	});
app.get('/forbidden',function(req, res){
		res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	});
app.get('/notfound',function(req, res){
		res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	});
app.get('/internal',function(req, res){
		res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
	});

app.listen(3000);