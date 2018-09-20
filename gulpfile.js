var gulp = require('gulp');

// Plugins
var changed = require('gulp-changed'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat');
    uglify = require('gulp-uglify'),
    imagemin = require ('gulp-imagemin'),
    minifyhtml = require ('gulp-minify-html'),
    autoprefixer = require ('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    minifyCSS = require ('gulp-minify-css');

gulp.task('scripts', function() {
     return gulp.src('js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist'))
            .pipe(rename('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);