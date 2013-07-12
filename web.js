var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs')
var buf = require('buffer')

app.get('/', function(request, response) {
  buf = new Buffer(256);
  buf= fs.readFileSync("index.html");
  str = buf.toString('ascii',0,buf.length);
response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
