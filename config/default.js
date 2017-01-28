const path = require('path');

module.exports = {
    port: 7373,
    root: process.cwd(),
    keyWord: 'pixelTactics',

    dbName: 'pixelTactics',
    dbIp: 'localhost',

    buildFolderName: 'build',
    html: {
        index: 'index.html',
        // login: 'login.html',
        // registration: 'registration.html'
    },
    buildFolder() {
        return path.join(this.root, this.buildFolderName);
    },

    dateFormat: 'DD.MM.YYYY',
    crypto: {
        keys: 'PixelTactics',
        hash: {
            length: 128,
            iterations: process.env.NODE_ENV == 'production' ? 12000 : 1
        }
    },
    timezone: 'Asia/Yekaterinburg'
};
