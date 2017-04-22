try{

const spawn = require( 'child_process' ).spawn;
    const command = spawn(`git config --get "remote.origin.url"`);

    command.stdout.on( 'data', data => {
        console.log( `stdout: ${data}` );
    });

    command.stderr.on( 'data', data => {
        console.log( `stderr: ${data}` );
    });

    command.on( 'close', code => {
        console.log( `child process exited with code ${code}` );
    });
}catch(err){
    console.log(err);
}


