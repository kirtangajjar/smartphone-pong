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

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

io.on('connection', function(socket) {
	console.log('A client has been connected');

	socket.on('init', function(){
		console.log('Initializing game');
	});	
});



server.listen(8080, function(){
	console.log("Server up and running");
});