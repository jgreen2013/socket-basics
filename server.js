var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection',function(socket){
    console.log('User Connected via socketio');

    socket.on('message',function(message){
        console.log(message.text);

        io.emit('message',message);
    });
    //timestampMoment.format('h:mm a')
    socket.emit('message',{
        text: 'Welcome to the chat application!'
    });
});


http.listen(PORT,function(){
    console.log("Server started");
});
