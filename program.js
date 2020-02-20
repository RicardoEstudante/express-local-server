var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});


app.get('/usuario', function (req, res) {
  res.sendFile(__dirname + "/html/usuario.html");
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})