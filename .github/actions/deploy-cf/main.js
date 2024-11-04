const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
    core.notice('Hello from js action!!!');

    const dir = core.getInput('deployableDir');
    const projectName = core.getInput('projectName');

    exec.exec('npm install wrangler -y');
    exec.exec(`npx wrangler pages deploy ${dir} --project-name ${projectName}`);
}

run();