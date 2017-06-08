'use strict';

import gulp from 'gulp';
import config from './server/config';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import 'source-map-support/register'
import sass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import sourceMaps from 'gulp-sourcemaps';
import sourceMapSupport from 'gulp-sourcemaps-support';
import watch from 'gulp-watch';
// import Cache from 'gulp-file-cache';

// let cache = new Cache();

gulp.task('js:babel', () => {

    console.log("transpiling the code...");

    let stream = gulp.src('server/**/*.js')
        // .pipe(sourceMapSupport())
        // .pipe(sourceMaps.init())
        // .pipe(cache.filter())
        .pipe(babel())
        // .pipe(cache.cache())
        // .pipe(sourceMaps.write('./maps', {
        //     sourceRoot: "../server"
        // }))
        .pipe(gulp.dest('build'))

    return stream;
});

gulp.task('watch', ['js:babel'], () => {

    let stream = nodemon({
        script: 'build/',
        watch: 'server',
        tasks: ['js:babel']
    });

    return stream;
});

gulp.task('default', ['watch']);