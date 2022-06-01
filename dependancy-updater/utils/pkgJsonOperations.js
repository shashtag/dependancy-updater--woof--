const URL = require('url');
const axios = require('axios');
const GHurlToObj = require('github-url-to-object');
const UpdateRepo = require('./UpdateRepo');

module.exports = async (url, pkgname, ver, i) => {
	let repoParts = GHurlToObj(url);
	// console.log(repoParts);
	// console.log(`${repoParts.api_url}/contents/package.json`);
	try {
		const response = await octokit.request(
			`GET /repos/{owner}/{repo}/contents/package.json`,
			{
				owner: repoParts.user,
				repo: repoParts.repo
			}
		);

		const pkgData = JSON.parse(
			Buffer.from(response.data.content, response.data.encoding)
		);
		let depVersion = pkgData.dependencies[pkgname].substr(1);
		csvData[i].version = depVersion;
		let isSatisfied = depVersion >= ver;
		csvData[i].version_satisfied = isSatisfied;

		pkgData.dependencies[pkgname] =
			pkgData.dependencies[pkgname].substring(0, 1) + ver;
		await UpdateRepo(isSatisfied, repoParts);
	} catch (e) {
		console.log(e);
	}
};
