var chat_v1 = require('./chat_v1');

function serverUp(app, http, path){
		//creamos una instancia servidor de http para los sockets
		var servChat = http.Server(app).listen(3000);
	
		console.log('working on port 3000');
	
		var io = require('socket.io').listen(servChat);
		chat_v1.version1(io);
	
	}
	
exports.levantar= serverUp;