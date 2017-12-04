#!/usr/bin/env node
const branch = require('git-branch');
const open = require('opn');
const gitRemoteOriginUrl = require('git-remote-origin-url');

gitRemoteOriginUrl().then(url => {
    // open pull-request window in default browser for bitbucket 
    // url = https://username@bitbucket.org/team/repositry.git
    let removeGit,
        splitChar,
        i,
        removeUsername,
        uri

    removeGit = url.slice(0, -4)
    splitChar = removeGit.split('@')
    i = (splitChar[0].indexOf('/')) + 2
    removeUsername = splitChar[0].substr(0, i)
    splitChar[0] = removeUsername
    uri = splitChar.join("")
    open(`${uri}/pull-requests/new?source=${branch.sync()}&t=1`)
    process.exit()
});
