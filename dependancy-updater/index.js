#!/usr/bin/env node

/**
 * dependancy-updater
 * Cli tool to update Devendancies and related functionalities.
 *
 * @author Shashwat Gupta (Shashtag) <https://github.com/shashtag>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');

const handleInputErrors = require('./utils/handleInputError');
const getCsvData = require('./utils/getCsvData');
const handleMissingInputs = require('./utils/handleMissingInputs');
const { Octokit } = require('@octokit/core');

global.csvData = [];
global.flags = cli.flags;
global.octokit = new Octokit({
	auth: ''
});
global.inputPackageName = '';
global.inputPackageVersion = '';

const input = cli.input;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (flags.csv && flags.package) {
		handleInputErrors();
		getCsvData();
	}
	handleMissingInputs();
})();
