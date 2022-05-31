const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');

module.exports = (csvData, csv) => {
	const csvpath = path.join(process.cwd(), csv);
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
};
