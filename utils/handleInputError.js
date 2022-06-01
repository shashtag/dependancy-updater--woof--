const alert = require('cli-alerts');
const { flags } = require('./cli');

module.exports = () => {
	if (flags.csv.substr(flags.csv.length - 4) !== '.csv') {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Enter a file with .csv extension`
		});
		process.exit(1);
	}
	const patten = /^[a-z]+@[0-9]+\.[0-9]+\.[0-9]+$/;
	if (!patten.test(flags.package)) {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Enter a correct package name and version`
		});
		process.exit(1);
	}
};
