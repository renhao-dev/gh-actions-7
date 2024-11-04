const core = import('@actions/core');
const exec = import('@actions/exec');
const github = import('@actions/github');

function run() {
    core.notice('Hello from js action!!!');
}

run();