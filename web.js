var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  bfr = fs.readFileSync('index.html');
  response.send(buf.toString('utf8', 0, bfr.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
