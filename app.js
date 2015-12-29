var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.post('/guardarUsuario', function(req, res) {
    var name = req.body;
    console.log(name);
});
app.use(express.static(path.join(__dirname, 'public')));

//app.register('.html', require('jade'));
app.get('/', function (req, res) {
  	res.sendFile(path.join(__dirname+ '/public/views/index.html'));
});
app.get('/nuevo', function (req, res) {
  	res.sendFile(path.join(__dirname+ '/public/views/nuevo.html')); 
});

app.post


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});