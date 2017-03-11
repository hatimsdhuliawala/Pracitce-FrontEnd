var http = require('http');
var server = http.createServer(function (request, response) {
	response.end('Hello World from server side');
});
server.listen('3000', function(){
	console.log('the server is running at http://localhost:3000/');
});

var express = require('express');