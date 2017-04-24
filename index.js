#!/usr/bin/env babel-node
import process from 'process';
import Program from 'commander';
import OpenRepository from './src/git/openRepo';
import CheckStatusForWebsites from './src/web/webStatus';
import GenerateDotFile from './src/dot/dotFiles';

Program
    .command('gh open')
    .action(OpenRepository);

Program
    .command('web status')
    .action(CheckStatusForWebsites);

Program
    .command('dot [name]')
    .action(GenerateDotFile);

Program.parse(process.argv);

