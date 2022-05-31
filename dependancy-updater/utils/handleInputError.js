module.exports = (csv, pkg) => {
	if (csv.substr(csv.length - 4) !== '.csv') {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Enter a file with .csv extension`
		});
	}
};
