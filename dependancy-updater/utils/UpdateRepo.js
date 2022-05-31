const { flags } = require('./cli');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

module.exports = (isSatisfied, jsonData, i) => {
	const git = simpleGit();
	if (flags.update && !isSatisfied) {
		console.log(__dirname);
		const localPath = path.join(__dirname, 'TempRepoFolder');
		const pkgPath = path.join(localPath, 'package.json');
		try {
			if (!fs.existsSync(localPath)) {
				fs.mkdirSync(localPath);
			}
			git.clone(csvData[i].Repo, localPath, {
				'--no-checkout': true
			})
				.cwd({ path: localPath, root: true })
				.checkout({ '-b': 'aaa' });

			fs.writeFileSync(pkgPath, JSON.stringify(jsonData, null, 2));
		} catch (err) {
			console.error(err);
		}
	}
};
