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

server.listen(8080, function(){
	console.log("Server up and running");
});