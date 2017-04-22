#!/usr/bin/env babel-node
import Program from 'commander';
import OpenRepository from './src/git/openRepo';
import CheckStatusForWebsites from './src/web/webStatus';

Program
    .command('gh open')
    .action(OpenRepository);

Program
    .command('web status')
    .action(CheckStatusForWebsites);

Program.parse(process.argv);

