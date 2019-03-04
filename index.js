#!/usr/bin/env node
const branch = require('git-branch');
const open = require('opn');
const gitRemoteOriginUrl = require('git-remote-origin-url');
const { URL } = require('url');

gitRemoteOriginUrl()
    .then(url => {
        // open pull-request window in default browser for bitbucket
        // url = https://username@bitbucket.org/team/repositry.git
        const address = new URL(url)
        let uri

        // remove .git
        uri = address.origin + address.pathname.slice(0, -4)
        // open(`${uri}/pull-requests/new?source=${branch.sync()}&t=1`)
        open(`${uri}/pull-requests/new`)
        process.exit()
    }).catch(err => {
        console.log(err)
        console.log('\nPlease set your git remote origin url')
    })
