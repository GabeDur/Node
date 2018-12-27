function serverUp(app, express){
		app.listen(3000);
		console.log('working on port 3000');
		estaticos(app, express);
	}
	
function estaticos(app, express){
		app.use(express.static('./public'));
	}
	
exports.levantar= serverUp;