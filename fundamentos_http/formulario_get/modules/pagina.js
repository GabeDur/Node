var valor;

//recuperamos el valor que ingreso el usuario
function servir(url, req){
	var query = url.parse(req.url, true).query;
	console.log('el query tiene: ');
	console.log(query);
	valor=query.nombre;
	return servirHtml(valor)
}
	

function servirHtml(valor){
   var html = '<!DOCTYPE html>';
   html += '<html>';
   html += '<head>';
   html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
   html += '</head>';
   html += '<body>';
	
   html += '<form action="">';
   html += '<label> Nombre </label> <br />';
   html += '<input type="text" name="nombre" required="required" /> <br /><br />';
   
   html += '<input type="submit" value="Enviar" />';
   html += '</form>';
   html += mostrarValor(valor);
   html += '</body>';
   html += '</html>';
   return html;
}

function mostrarValor(valor){
   var html = '<ul>';
		if(valor!= undefined){
			html += '<li> <strong> su nombre es:  ' + valor + ' </strong></li>';
		}
   html += '</ul>';
   return html;
}

exports.servir = servir;