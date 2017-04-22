import {exec} from 'child_process';
import open from 'open';

export default () => {
    exec('git config --get "remote.origin.url"', (err ,stdout) => {
        const host = 'https://github.com/';
        const githubUri = stdout.replace('git@github.com:', '').replace('.git', '').trim();

        if(githubUri.length == 0){
            console.log('No git repository found.');
            return;
        }

        open(`${host}${githubUri}`);
    });
};
