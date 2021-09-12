var fs = require('fs');
var path = require('path');

var filePath=path.resolve(__dirname,'res/hello.txt');

fs.readFile(filePath,{encoding:'utf-8'}, function (err,data) {
	console.log('Data:', data);
});

console.log( '-end of -program' );
