var express = require('express')
var app = express()


app.get('/', function (req, res) {
    res.send('Sua home');
  })
  
app.get('/produtos', function (req, res) {
    res.send('exibindo produtos!');
  })
  
  
app.get('/usuarios', function (req, res) {
    res.send('exibindo usuários');
  })

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})