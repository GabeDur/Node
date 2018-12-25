var express = require('express');
var path = require('path');
var indexRouter=require('./routes/index');
var app = express();

/*Usar archivos css*/
app.use(express.static(__dirname + '/public'));

//usar motor de platillas jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//para trabajar con los name de los formularios
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.get('/inicio', function(req, res){
	res.send("<h1>Welcome to express</h1>");
});

app.listen(5000, function(){
	console.log("----server in port 5000----");
});