const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `cl`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		alias: `nc`,
		desc: `Don't clear the console`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	csv: {
		type: `string`,
		alias: 'c',
		desc: `Input the CSV file name`
	},
	package: {
		type: `string`,
		alias: `p`,
		desc: `Input the package name`
	},
	update: {
		type: `boolean`,
		alias: `u`,
		desc: `Update the packages and send a pull request`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `depend`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
