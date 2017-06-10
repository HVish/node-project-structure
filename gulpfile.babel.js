'use strict';

import gulp from 'gulp';
import config from './server/config';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import sourceMaps from 'gulp-sourcemaps';

gulp.task('js:server', () => {

    console.log("transpiling the code...");

    let stream = gulp.src('server/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel())
        .pipe(sourceMaps.write('maps', {
            includeContent: false,
            sourceRoot: "../server"
        }))
        .pipe(gulp.dest('build'));

    return stream;
});

gulp.task('watch', ['js:server'], () => {

    let conf = config.local[config.local.module];
    let stream = nodemon({
        script: 'build/',
        watch: 'server',
        tasks: ['js:server'],
        env: {
            'MODULE': config.local.module,
            'NODE_ENV': conf.env,
            'PORT': conf.port
        }
    });

    return stream;
});

gulp.task('default', ['watch']);