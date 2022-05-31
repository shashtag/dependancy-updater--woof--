const alert = require('cli-alerts');

module.exports = () => {
	if (flags.csv.substr(flags.csv.length - 4) !== '.csv') {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Enter a file with .csv extension`
		});
	}
};
