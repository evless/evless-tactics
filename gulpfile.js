const gulp = require('gulp');
const sequence = require('gulp-sequence');
const TASKS_FOLDER = './tasks/';

gulp.task('dev', (done) => {
    sequence('clean', ['server:start:dev', 'client:webpack:dev'], () => {
        done();
    });
});

gulp.task('prod:start', (done) => {
    sequence('clean', 'client:webpack:prod', 'db:start', 'server:start:prod', () => {
        done();
    });
});

gulp.task('prod:stop', (done) => {
    sequence('clean', 'db:stop', 'server:stop:prod', () => {
        done();
    });
});

// Common
gulp.task('clean', require(TASKS_FOLDER + 'clean'));
gulp.task('help', require(TASKS_FOLDER + 'help'));
gulp.task('default', require(TASKS_FOLDER + 'help'));

// DataBase
gulp.task('db:load', require(TASKS_FOLDER + 'db.load'));
gulp.task('db:start', require(TASKS_FOLDER + 'db.start'));
gulp.task('db:stop', require(TASKS_FOLDER + 'db.stop'));

// Server
gulp.task('server:start:dev', require(TASKS_FOLDER + 'server.dev'));
gulp.task('server:start:prod', require(TASKS_FOLDER + 'server.start.prod'));
gulp.task('server:restart:prod', require(TASKS_FOLDER + 'server.start.prod'));
gulp.task('server:stop:prod', require(TASKS_FOLDER + 'server.stop.prod'));

// Client
gulp.task('client:webpack:dev', require(TASKS_FOLDER + 'webpack.dev'));
gulp.task('client:webpack:prod', require(TASKS_FOLDER + 'webpack.prod'));
