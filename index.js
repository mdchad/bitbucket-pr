#!/usr/bin/env node
const branch = require('git-branch');
const open = require('opn');
const gitRemoteOriginUrl = require('git-remote-origin-url');

gitRemoteOriginUrl().then(url => {
    // for bitbucket 
    // url = https://username@bitbucket.org/team/repository.it
    let removeGit,
        splitChar,
        i,
        removeUsername,
        uri
    removeGit = url.slice(0, -4)
    splitChar = sl.split('@')
    i = (ssl[0].indexOf('/')) + 2
    removeUsername = ssl[0].substr(0, i)
    ssl[0] = removeUsername
    uri = ssl.join("")
    open(uri + '/pull-requests/new?source=' + branch.sync() + '&t=1')
    process.exit()
});
