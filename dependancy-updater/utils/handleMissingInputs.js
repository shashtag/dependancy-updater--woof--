module.exports = (csv, pkg) => {
	if ((csv && !pkg) || (!csv && pkg)) {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Add both csv file using flag '-c' and package using flag '-p'`
		});
	}
};
