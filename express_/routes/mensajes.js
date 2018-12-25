var lista = new Array();
var total=0;

function enviar_mensaje(req, res){
		res.render('formulario',
			{title:'Formulario', lista:lista, total:total}
		);
	}
	
	exports.get_enviar_mensaje= function(req, res){
			enviar_mensaje(req, res);
		}
		
	exports.post_enviar_mensaje=function(req, res){
			console.log(req.body);
			var asunto=req.body.asunto;
			total++;
			var mensaje=req.body.mensaje;
			lista.push({
				asunto: asunto,
				mensaje: mensaje
				})
			enviar_mensaje(req, res);
		}
		
	exports.get_mensaje=function(req, res){
			var indice = req.params.indice;
			console.log(indice);
			var mensaje=(lista[indice] != undefined) ? lista[indice] : null;
			if(mensaje){
				res.render('mensaje',
					{mensaje:mensaje, title:'Mensaje: ' + mensaje.asunto }
				);
			}else{
				res.render('mensaje',
					{mensaje:mensaje, title:'Mensaje: null' }
				);
			}
		}