const config = require('config');
const path = require('path');
const fs = require('fs');
const thunkify = require('thunkify');
const read = thunkify(fs.readFile);
const app = require('koa')();
const kstatis = require('koa-static');
const mongoose = require('mongoose');

// let ip = ('production' === process.env.NODE_ENV) ? config.dbIp : 'localhost';
// mongoose.connect(`mongodb://${ip}/${config.dbName}`);

// app.keys = [config.crypto.keys]

// const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();
//
// middlewares.forEach(function(middleware) {
//     app.use(require('./middlewares/' + middleware));
// });

app.use(kstatis(config.buildFolder()));

app.use(function *(next) {
    let html = yield read(path.join(config.buildFolder(), config.html.index));
    this.type = 'text/html';
    this.body = html;
});

app.listen(config.port);
