'use strict';

const config = require('config');
const exec = require('child_process').exec;

module.exports = function(done) {
    exec('node_modules/forever/bin/forever restart server/index.js', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        done(err)
    })
}
