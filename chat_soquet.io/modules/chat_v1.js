/**CHAT**/
var conectados=0;

function ver1(io){
	io.sockets.on('connection', function(socket){
			console.log('se conecto un usuario');
			conectados++;
			//mensaje alert para el usuario que se conecto
			socket.emit('message', 
					{text : 'Te has conectado!'}
				);
					
			socket.emit('users',
					{number:conectados}
				);
			//mensaje para todos los que estan conectados
			socket.broadcast.emit('message',
					{text:'un nuevo usuario se acaba de conectar'}
				);
			
			socket.on('disconnect', function(){
					console.log('se desconecto un usuario');
					conectados--;
					socket.broadcast.emit('users',
							{number:conectados}
						);
			});
	});
}

exports.version1=ver1;