express = require('express');

app=express();

//index
app.get('/', function(req, res){
		res.sendFile(__dirname + '/pages/index.html');
	});
	
//cualquier otra ruta
app.use(function(req, res){
		res.status(404);
		res.sendFile(__dirname + '/pages/error.html');
	});

	
app.listen(3000);