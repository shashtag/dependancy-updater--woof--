const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');
const checkPkgJson = require('./checkPkgJson');
const { flags } = require('./cli');
const alert = require('cli-alerts');

module.exports = () => {
	const csvpath = path.join(process.cwd(), flags.csv);

	let inputPackageName = '';
	let inputPackageVersion = '';

	let i = 0;
	while (flags.package[i] !== '@') {
		inputPackageName += flags.package[i++];
	}
	i++;
	while (i < flags.package.length) {
		inputPackageVersion += flags.package[i++];
	}

	return fs
		.createReadStream(csvpath)
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
		.on('end', async () => {
			alert({
				type: `info`,
				name: `Input`,
				msg: `Csv file uploaded by the user`
			});
			console.table(csvData);

			for (let i = 0; i < csvData.length; i++) {
				await checkPkgJson(
					csvData[i].Repo,
					inputPackageName,
					inputPackageVersion,
					i
				);
			}

			alert({
				type: `info`,
				name: `Output`,
				msg: `Version of ${inputPackageName} in each package and their satisfaction`
			});
			console.table(csvData);
		});
};
