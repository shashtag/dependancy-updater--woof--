const { flags } = require('./cli');
const fs = require('fs');
const path = require('path');
const simpleGit = require('simple-git');
const { execSync } = require('child_process');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

module.exports = async (isSatisfied, repoParts) => {
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
					process.chdir(localDir);
					console.log(process.cwd());
					try {
						const response = await octokit.request(
							`POST /repos/{owner}/{repo}/pulls`,
							{
								owner: repoParts.user,
								repo: repoParts.repo,
								title: 'sss',
								body: 'sss',
								head: 'shashtag:main',
								base: 'main'
							}
						);
					} catch (e) {
						console.log(e);
					}
				});
		} catch (err) {
			console.error(err);
		}
	}
};
