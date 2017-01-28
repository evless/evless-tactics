'use strict';

const config = require('config');
const exec = require('child_process').exec;

module.exports = function(done) {
    exec('NODE_ENV=production node_modules/forever/bin/forever start server/index.js --minUptime 1000 --spinSleepTime 1000', (err, stdout, stderr) => {
        console.log(stdout)
        console.log(stderr)
        done(err)
    })
}
