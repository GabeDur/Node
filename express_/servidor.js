var express = require('express');
var app = express();

/*Primer forma para poder usar archivos css*/
//app.use(express.static('public'));
 
/*Segunda forma para poder usar archivos css*/
app.use(express.static(__dirname + '/public'));


app.get('/inicio', function(req, res){
	res.send("<h1>Welcome to express</h1>");
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/plantilla.html');
});

app.listen(3000, function(){
	console.log("----server on----");
});