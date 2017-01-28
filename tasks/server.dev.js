'use strict';

const config = require('config');
const nodemon = require('gulp-nodemon');

module.exports = function(done) {
    nodemon({
        nodeArgs: ['--debug'],
        watch: ['server/*'],
        script:   'server/index.js'
    });
}
