'use strict';

const config = require('config');
const exec = require('child_process').exec;

module.exports = function(done) {
    exec('pkill mongod', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        done(err)
    });
}
