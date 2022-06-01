const alert = require('cli-alerts');

module.exports = () => {
	if ((flags.csv && !flags.package) || (!flags.csv && flags.package)) {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Add both csv file using flag '-c' and package using flag '-p'`
		});
	}
};
