/*
* Pétur Logi Pétursson
* Rafmyntir - Haust 2018
*/
'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');



// SCSS/SCC
var SCSS_SRC = './src/Assets/scss/**/*';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
function compile_scss() {

    return gulp
    .src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
};

// Detect changes in SCSS
function watch_scss() {
    return gulp
    .watch(SCSS_SRC, gulp.series(compile_scss));
};

// Run tasks
gulp.task('default', gulp.parallel(watch_scss));