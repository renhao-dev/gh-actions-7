const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
    core.notice('Hello from js action!!!');

    const dir = core.getInput('deployableDir');
    const projectName = core.getInput('projectName');

    const apiToken = core.getInput('apiToken');
    const accountID = core.getInput('accountID');

    exec.exec('npm install wrangler -y');
    exec.exec(`echo "CF_ACCOUNT_ID=${accountID}" >> $GITHUB_ENV`);
    exec.exec(`echo "CF_API_TOKEN=${apiToken}" >> $GITHUB_ENV`);
    exec.exec(`npx wrangler pages deploy ${dir} --project-name ${projectName}`);
}

run();