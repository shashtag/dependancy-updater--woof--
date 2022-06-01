var inquirer = require('inquirer');
const { Octokit } = require('@octokit/core');

module.exports = async () => {
	try {
		const answers = await inquirer.prompt([
			{
				type: 'password',
				name: 'GhPat',
				message: 'Enter your GitHub Personal Access Token'
			}
		]);
		global.octokit = new Octokit({
			auth: answers.GhPat.trim()
		});
	} catch (e) {
		if (error.isTtyError) {
		} else {
		}
	}
};
