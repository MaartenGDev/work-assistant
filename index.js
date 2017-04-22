#!/usr/bin/env babel-node
import Program from 'commander';
import {exec} from 'child_process';
import open from 'open';

let openRepoUrl = () => {
    exec(`git config --get "remote.origin.url"`, (err ,stdout, stderr) => {
        const host = 'https://github.com/';
        const githubUri = stdout.replace('git@github.com:', '').replace('.git', '').trim();
        
        open(`${host}${githubUri}`);
    });
};
Program
    .command('gh open')
    .action(openRepoUrl);

Program.parse(process.argv);

