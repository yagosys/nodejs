var child_process = require ('child_process');

child_process.exec('ls', function (err,stdout) {
	console.log('ls:-',stdout);
});

console.log ('-end of -program');

