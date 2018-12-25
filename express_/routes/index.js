var express = require('express');
var mensajes=require('./mensajes');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Ejercicios de express'});
});

router.get('/formulario', mensajes.get_enviar_mensaje);
router.post('/formulario', mensajes.post_enviar_mensaje);
router.get('/mensaje/:indice', mensajes.get_mensaje);

module.exports = router;
