express = require('express');

app=express();

//paginas
var paginas=[
		{ident:'1', pagina:"/pages/index1.html"},
		{ident:'2', pagina:"/pages/index2.html"},
		{ident:'3', pagina:"/pages/index3.html"}
	]

//un solo parametro
//ejemplo de url: http://localhost:3000/colores/1
app.get('/colores/:id', function(req, res){
		var cantidad = 0;
		console.log(req.params.id);
		var error = paginas.filter(function(objeto){
				if (req.params.id==objeto.ident){
					cantidad++;
					res.sendFile(__dirname + objeto.pagina);
				}
			});
		if(cantidad==0){
			res.sendFile(__dirname + '/pages/error.html');
		}
	});

//dos parametros
//ejemplo de url: http://localhost:3000/colores/1
app.get('/colores/:id/:valor', function(req, res){
		console.log(req.params.id);
		console.log(req.params.valor);
		res.send('OK!');
	});
	
app.listen(3000);