var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var message = ""
  socket.on('chat message', function(msg){
    if (msg.substr(0,3) != "NXT" && msg.substr(0,3) != "END") {
      io.emit('chat message', msg);
      message = ""3, str.length - 3
      return;
    }
    message = message + msg.substr(3, str.length - 3)
    if  (msg.substr(0,3) === "END") {
       io.emit('chat message', message)
       message = ""
    }
    
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
