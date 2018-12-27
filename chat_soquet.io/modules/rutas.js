function rutear(app, path){
	app.get('/',function(req, res){
			res.sendFile(path.join(__dirname, '../pages/', 'index.html'));
		});
	app.get('/plantilla', function(req, res){
			res.sendFile(path.join(__dirname,'../pages/','plantilla.html'));
		});
	app.get('/ver1', function(req, res){
		res.sendFile(path.join(__dirname,'../pages/','ver1.html'));
	});
}

exports.servir=rutear;