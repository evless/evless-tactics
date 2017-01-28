'use strict';

const config = require('config');
const fixtures = require('pow-mongodb-fixtures').connect(config.dbName);

module.exports = function(done) {
    fixtures.load(config.root + '/fixtures');
    done();
}
