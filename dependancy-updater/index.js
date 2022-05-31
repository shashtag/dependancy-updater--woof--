#!/usr/bin/env node

/**
 * dependancy-updater
 * Cli tool to update Devendancies and related functionalities.
 *
 * @author Shashwat Gupta (Shashtag) <https://github.com/shashtag>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const alert = require('cli-alerts');
let path = require('path');
let fs = require('fs');
let { parse } = require('csv-parse');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (flags.csv && flags.package) {
		if (flags.csv.substr(flags.csv.length - 4) !== '.csv') {
			alert({
				type: `error`,
				name: `Args Error`,
				msg: `Enter a file with .csv extension`
			});
		}
		const csvpath = path.join(process.cwd(), flags.csv);
		const csvData = [];
		fs.createReadStream(csvpath)
			.pipe(
				parse({
					columns: true,
					delimiter: [';', ',', ' ', '\t', '|'],
					bom: true
				})
			)
			.on('data', dataRow => {
				csvData.push(dataRow);
			})
			.on('end', () => console.table(csvData));
	}

	if ((flags.csv && !flags.package) || (!flags.csv && flags.package)) {
		alert({
			type: `error`,
			name: `Args Error`,
			msg: `Add both csv file using flag '-c' and package using flag '-p'`
		});
	}
	debug && log(flags);
})();
