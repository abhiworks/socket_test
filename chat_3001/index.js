var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);

const redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));  // Redis Connect


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
   
/* Check the details of Connected and disconnected user */

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

/* We can Check the connection Ids here */

// io.of('/').adapter.clients((err, clients) => {
//   console.log(clients); // an array containing all connected socket ids
// });


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	console.log('message'+msg);     // Console messages from client
    io.emit('chat message', msg);  
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});