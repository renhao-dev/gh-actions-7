const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function run() {
    const dir = core.getInput('deployableDir');
    const projectName = core.getInput('projectName');

    const apiToken = core.getInput('apiToken');
    const accountID = core.getInput('accountID');

    await exec.exec('npm install wrangler -y');
    await exec.exec('npm install cross-env -y');

    await exec.exec(`npx cross-env CLOUDFLARE_ACCOUNT_ID=${accountID} CLOUDFLARE_API_TOKEN=${apiToken} wrangler pages deploy ${dir} --project-name ${projectName}`);
}

run();