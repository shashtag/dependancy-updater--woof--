const { flags } = require('./cli');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const { execSync } = require('child_process');
const getCsvData = require('./getCsvData');
const alert = require('cli-alerts');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

module.exports = async (isSatisfied, repoParts, i) => {
	const git = simpleGit();
	if (flags.update && !isSatisfied) {
		console.log(__dirname);
		const localDir = path.join(__dirname, 'TempRepoFolder');
		try {
			const fork = await octokit.request(
				'POST /repos/{owner}/{repo}/forks',
				{
					owner: repoParts.user,
					repo: repoParts.repo
				}
			);

			git.exec(() => {
				if (!fs.existsSync(localDir)) {
					fs.mkdirSync(localDir);
				}
			})
				.clone(fork.data.html_url, localDir, {
					'--no-checkout': true
				})
				.cwd({ path: localDir, root: true })
				.reset('mixed')
				.checkout('package.json')
				.checkout('package-lock.json')
				.checkout('.gitignore')
				.exec(() =>
					execSync(`npm install ${flags.package}`, {
						cwd: localDir
					})
				)
				.add(['package.json', 'package-lock.json'])
				.commit('test')
				.push()
				.exec(async () => {
					const response = await octokit.request(
						`POST /repos/{owner}/{repo}/pulls`,
						{
							owner: repoParts.user,
							repo: repoParts.repo,
							title: `⬆️  Bump ${inputPackageName} to version ${inputPackageVersion}`,
							head: 'shashtag:main',
							base: 'main'
						}
					);

					csvData[i].update_pr = response.data.url;

					fs.rmSync(localDir, { recursive: true, force: true });
					alert({
						type: `info`,
						name: `Output`,
						msg: `Version of ${inputPackageName} in each package and their satisfaction`
					});
					console.table(csvData);
				});
		} catch (err) {
			console.error(err);
		}
	} else {
		csvData[i].update_pr = '';
	}
};
