'use strict';

const gutil = require('gulp-util');

module.exports = function(done) {
    gutil.log(
        gutil.colors.green('\n\n Gulp commands: \n\n'),
        gutil.colors.cyan('dev'), 'Developers сборка, включает в себя сборку статики, сервера и навешивания на них вотчеров\n',
        gutil.colors.cyan('prod:start'), 'Production cборка, включает сборку статики, сервера, запуск БД\n',
        gutil.colors.cyan('prod:stop'), 'Production cборка, останавливает сервер и БД\n\n',
        gutil.colors.cyan('clean'), 'Очистка папки с билдом\n',
        gutil.colors.cyan('help'), 'Выводит список команд\n\n',
        gutil.colors.cyan('db:load'), 'Загружает фикстуры в БД\n',
        gutil.colors.cyan('db:start'), 'Запускает локально БД\n',
        gutil.colors.cyan('db:stop'), 'Останавливает локальную БД\n\n',
        gutil.colors.cyan('server:start:dev'), 'Запуск сервера в режиме разработки с вотчером\n',
        gutil.colors.cyan('server:start:prod'), 'Запуск сервера в режиме продакшена\n',
        gutil.colors.cyan('server:stop:prod'), 'Останавливает сервер\n',
        gutil.colors.cyan('server:restart:prod'), 'Рестарт сервера\n\n',
        gutil.colors.cyan('client:webpack:dev'), 'Собирает клиентскую часть в режиме разработки и запускает вотчер\n',
        gutil.colors.cyan('client:webpack:prod'), 'Собирает клиентскую часть в для продакшн\n'
    );
};
