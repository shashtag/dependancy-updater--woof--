const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');
const pkgJsonOperations = require('./pkgJsonOperations');
const { flags } = require('./cli');
const alert = require('cli-alerts');
const loading = require('loading-cli');

module.exports = () => {
	const csvpath = path.join(process.cwd(), flags.csv);

	let i = 0;
	while (flags.package[i] !== '@') {
		inputPackageName += flags.package[i++];
	}
	i++;
	while (i < flags.package.length) {
		inputPackageVersion += flags.package[i++];
	}

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
		.on('end', async () => {
			alert({
				type: `info`,
				name: `Input`,
				msg: `Csv file uploaded by the you`
			});
			console.table(csvData);

			const load = loading('Performing operations').start();
			let k = 0;
			for (let data of csvData) {
				await pkgJsonOperations(
					data.Repo,
					inputPackageName,
					inputPackageVersion,
					k
				);

				k++;
			}

			load.stop();
			if (!flags.update) {
				alert({
					type: `info`,
					name: `Output`,
					msg: `Version of ${inputPackageName} in each package and their satisfaction`
				});
				console.table(csvData);
			} else {
				alert({
					type: `info`,
					name: `PR sent`,
					msg: `Version of ${inputPackageName} in each package, their satisfaction and pull request url`
				});
				console.table(csvData);
			}
				
		});
};
