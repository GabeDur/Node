var express = require('express');
var path = require('path');
var indexRouter=require('./routes/index');
var app = express();

/*Primer forma para poder usar archivos css*/
//app.use(express.static('public'));
 
/*Segunda forma para poder usar archivos css*/
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//para trabajar con los name de los formularios
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.get('/inicio', function(req, res){
	res.send("<h1>Welcome to express</h1>");
});
/* Antes de usar Jade esta era la plantilla que se usaba
app.get('/', function(req, res){
	res.sendFile(__dirname + '/plantilla.html');
});
*/
app.listen(5000, function(){
	console.log("----server in port 5000----");
});