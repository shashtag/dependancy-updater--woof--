const URL = require('url');
const axios = require('axios');
const GHurlToObj = require('github-url-to-object');
const { flags } = require('./cli');
const getCsvData = require('./getCsvData');

module.exports = async (url, pkgname, ver, i) => {
	let repoParts = GHurlToObj(url);
	try {
		const response = await axios.get(
			`${repoParts.api_url}/contents/package.json`
		);
		let depVersion = JSON.parse(
			Buffer.from(response.data.content, response.data.encoding)
		).dependencies[pkgname].substr(1);
		csvData[i].version = depVersion;
		csvData[i].version_satisfied = depVersion >= ver;
	} catch (e) {
		console.log(e);
	}
	// console.log(repoParts);
	// if (!repoParts) throw new Error('Invalid repo name');
};
