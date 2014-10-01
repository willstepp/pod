var express = require('express');
var http = require('http');

app = express();
app.set('port', process.env.PORT || 3002);

app.get('/', function(req, res){
  res.send('<h3>Pod</h3>');
});

//server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Pod listening on port ' + app.get('port'));
});