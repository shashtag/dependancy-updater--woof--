const { flags } = require('./cli');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const { execSync } = require('child_process');
const getCsvData = require('./getCsvData');
const alert = require('cli-alerts');
const { exit } = require('process');
const { loadavg } = require('os');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

module.exports = async (isSatisfied, repoParts, i) => {
	const git = simpleGit();
	if (flags.update && !isSatisfied) {
		const localDir = path.join(__dirname, 'TempRepoFolder');
		try {
			const fork = await octokit.request(
				'POST /repos/{owner}/{repo}/forks',
				{
					owner: repoParts.user,
					repo: repoParts.repo
				}
			);

			await git.exec(() => {
				if (!fs.existsSync(localDir)) {
					fs.mkdirSync(localDir);
				}
			});
			await git.clone(fork.data.html_url, localDir, {
				'--no-checkout': true
			});
			await git;
			await git.cwd({ path: localDir, root: true });
			await git.reset('mixed');
			await git.checkout('package.json');
			await git.checkout('package-lock.json');
			await git.checkout('.gitignore');
			await git.exec(() =>
				execSync(`npm install ${flags.package}`, {
					cwd: localDir
				})
			);
			await git.add(['package.json', 'package-lock.json']);
			await git.commit('test');
			await git.push();
			fs.rmSync(localDir, {
				recursive: true,
				force: true
			});
			try {
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
			} catch (e) {
				csvData[i].update_pr = 'sss';
				// console.log(e.response.data.errors);
				load.stop();
				alert({
					type: `error`,
					name: e.response.data.message + ' For Repo At Index ' + i,
					msg: e.response.data.errors.map(data => data.message)
				});
				process.exit(1);
			}
		} catch (err) {
			console.error(err);
		}
	}
};
