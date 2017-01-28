'use strict';

const config = require('config');
const del = require('del');

module.exports = function(done) {
    del(config.buildFolder()).then(() => done());
};
