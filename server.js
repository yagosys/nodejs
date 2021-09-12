var express = require ('express');

var server = express();

server.get('/', function (request,response) {
	response.send ("Hello world");
});

server.listen(3000,function () {
	console.log('Callback:Server started')
});

