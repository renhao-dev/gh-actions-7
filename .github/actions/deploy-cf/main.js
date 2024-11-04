const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function run() {
    core.notice('Hello from js action!!!');

    const dir = core.getInput('deployableDir');
    const projectName = core.getInput('projectName');

    const apiToken = core.getInput('apiToken');
    const accountID = core.getInput('accountID');

    await exec.exec('sudo apt update');
    await exec.exec('sudo apt install nodejs');
    //await exec.exec('ln -s /usr/bin/nodejs /usr/local/bin/node');
    //await exec.exec('ln -s /usr/bin/nodejs /usr/local/bin/node');
    await exec.exec('npm install wrangler -y');
    //exec.exec(`echo "CLOUDFLARE_ACCOUNT_ID=${accountID}" >> $GITHUB_ENV`);
    //exec.exec(`echo "CLOUDFLARE_API_TOKEN=${apiToken}" >> $GITHUB_ENV`);
    await exec.exec(`npx wrangler pages deploy ${dir} --project-name ${projectName}`, [], 
        {
            env:{
                "CLOUDFLARE_ACCOUNT_ID": accountID,
                "CLOUDFLARE_API_TOKEN": apiToken
            }
        }
    );
    /*exec.exec(`CLOUDFLARE_ACCOUNT_ID=${accountID}`);
    exec.exec(`CLOUDFLARE_API_TOKEN=${apiToken}`);
    exec.exec('echo $CLOUDFLARE_ACCOUNT_ID');
    exec.exec('echo $CLOUDFLARE_API_TOKEN');

    exec.exec(`npx wrangler pages deploy ${dir} --project-name ${projectName}`);*/
}

run();