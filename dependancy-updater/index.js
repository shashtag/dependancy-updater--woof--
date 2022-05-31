#!/usr/bin/env node

/**
 * dependancy-updater
 * Cli tool to update Devendancies and related functionalities.
 *
 * @author Shashwat Gupta (Shashtag) <https://github.com/shashtag>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const alert = require('cli-alerts');
const handleInputErrors = require('./utils/handleInputError');
const getCsvData = require('./utils/getCsvData');
const handleMissingInputs = require('./utils/handleMissingInputs');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (flags.csv && flags.package) {
		handleInputErrors(flags.csv, flags.package);
		const csvData = [];
		getCsvData(csvData, flags.csv);
	}
	handleMissingInputs(flags.csv, flags.package);
})();
