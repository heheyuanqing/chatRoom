let app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);
app.get('/',function(){
    console.log("This is chatRoom 's server");
});

http.listen('8080',function(){
    console.log('server listen on 8080');
});
io.on('connection',function(socket){
   // socket.broadcast.emit('join','someone join in the chatRoom ! welcome ~');
  console.log("someone join in the chatRoom ");
   socket.on('send',function(msg){
       console.log("someone send msg");
       socket.broadcast.emit('receive',msg);
   })
});
