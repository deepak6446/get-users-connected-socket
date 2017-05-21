var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
var i = 0,users = [];

app.get('/', function(req, res){
         res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	var user,j;
	console.log("-----------------new user connected----------------","user",users);
     
    setInterval(function(){
        io.sockets.emit('connect-disconnect',users);
    },1000);
    socket.on('user connected',function(data){
		j = i;
		i++;
		console.log("user connected userName",data.userName);

        users[j] = {"user" : data.userName, "date" : new Date() ,"second" :""};
        io.sockets.emit('connect-disconnect',users);
	});
	socket.on('disconnect',function(){ 
		console.log('disconnect user :',user);
        if(users.length>0 && j >= 0){
           users.splice(j,1);
           i--;
        }
        console.log(users.length);
        io.sockets.emit('connect-disconnect',users);
	});
})
http.listen('3000',function(){
	console.log("server listening on localhost:3000");
});