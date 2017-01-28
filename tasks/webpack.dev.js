'use strict';

const config = require('config');
const webpack = require('webpack');
const gutil = require('gulp-util');

module.exports = function(done) {
    let options = {
        watch: true,
        watchoptions: {
            aggregateTimeout: 100
        }
    };

    webpack(Object.assign(require('../webpack.config'), options), (err, stats) => {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            chunks: false,
            colors: true
        }));
    });
}
