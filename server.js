//importar
var express = require('express');
//instanciar
var app = express();

//Archivos estaticos css, js, img, html
<<<<<<< HEAD
app.use(express.static('.'));
=======
app.use(express.static('./gh-pages'));
>>>>>>> desarrollo_david

//ruteo
app.get('/', function(req, res){
res.sendfile(__dirname + '/gh-pages/index.html');
});

//escuchar
<<<<<<< HEAD
var server = app.listen(8080, function () {
=======
var server = app.listen(80, function () {
>>>>>>> desarrollo_david

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})