/*
	Ignore first few lines with /// 
	They are for Visual Studio Code Intellisense.  
*/

/// <reference path="typings/tsd.d.ts" />
/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts"/>
/// <reference path="typings/socket.io/socket.io.d.ts" />


var express = require("express"),
	app 	= express(),
	server 	= require("http").Server(app),
	io		= require("socket.io")(server);

// The game host will be connecting here
// send them index.html
app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

//The controllers will be connecting here
// send them controller.html
app.get('/:game_id/:controller_id', function(req, res) {
	res.sendFile(__dirname + "/public/controller.html");
});

io.on('connection', function(socket) {
	
	//On connection of controller(mobile)
	//Inform the game host about it
	socket.on('controller_connect', function(game_host, controller_id){
		socket.broadcast.to(game_host).emit('controller_connected', socket.id, controller_id);
		
		socket.on('move', function(direction, game_host, controller_id) {
			socket.broadcast.to(game_host).emit('move', direction, controller_id);
		});
		
		//When Controller disconnects
		//Inform game host about it
		socket.on('disconnect', function() {
			socket.broadcast.to(game_host).emit('controller_disconnect', socket.id);
		});
	});
});

server.listen(8080, function(){
	console.log("Server up and running");
});