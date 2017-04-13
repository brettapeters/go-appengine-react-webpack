const spawn = require('child_process').spawn;

export default {
	listen: (port) => {
		const child = spawn('dev_appserver.py', [`--port=${port}`, 'app.yaml']);
		child.stdout.on('data', function(data) {
			process.stdout.write(data);
		});
		child.stderr.on('data', function(data) {
			process.stderr.write(data);
		});
		child.on('close', function(code) {
			process.stderr.write('Exit code: ' + code);
		});
	}
};
