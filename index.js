#!/usr/bin/env babel-node
import Program from 'commander';
import OpenRepository from './src/git/openRepo';

Program
    .command('gh open')
    .action(OpenRepository);

Program.parse(process.argv);

