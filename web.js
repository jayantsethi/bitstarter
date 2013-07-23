var express = require('express');

var app = express.createServer(express.logger());
var fs=require("fs");
app.get('/', function(request, response) {
  bfr = fs.readFileSync('index.html');
  response.send(bfr.toString('utf8', 0, bfr.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
