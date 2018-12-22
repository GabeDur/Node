function servir(valor){
   var html = '<!DOCTYPE html>';
   html += '<html>';
   html += '<head>';
   html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
   html += '</head>';
   html += '<body>';
	
   html += '<form action="" method="post">';
   html += '<label> Nombre </label> <br />';
   html += '<input type="text" name="nombre" required="required" /> <br /><br />';
   
   html += '<input type="submit" value="Enviar" />';
   html += '</form>';
   html += mostrarNombres(valor);
   html += '</body>';
   html += '</html>';
   return html;
}

function mostrarNombres(valor){
   var html = '<ul>';
		if(valor!= undefined){
			html += '<li> <strong> su nombre es:  ' + valor + ' </strong></li>';
		}
   html += '</ul>';
   return html;
}

exports.servir = servir;