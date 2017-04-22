#!/usr/bin/env babel-node
import Program from 'commander';
import OpenRepository from './src/git/openRepo';
import CheckStatusForWebsites from './src/web/webStatus';
import generateDotFile from './src/templates/dotFiles';

Program
    .command('gh open')
    .action(OpenRepository);

Program
    .command('web status')
    .action(CheckStatusForWebsites);

Program
    .command('template [name]')
    .action(generateDotFile);

Program.parse(process.argv);

