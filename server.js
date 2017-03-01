//importar
var express = require('express');
//instanciar
var app = express();

//Archivos estaticos css, js, img, html
app.use(express.static('public'));

//ruteo
app.get('/', function(req, res){
res.sendfile(__dirname + '/index.html');
});

//escuchar
app.listen(8080);
console.log("Servidor Express escuchando en modo %s", app.settings.env);