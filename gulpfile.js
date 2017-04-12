var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


var lib = [
    'bower_components/angular/angular.js',
    'bower_components/ngstorage/ngStorage.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
];

var css = [
    'bower_components/bootstrap/dist/css/bootstrap.css',
    'bower_components/angular-material/angular-material.css'
];
var jsApp = ['src/public/app/main.js', 'src/public/app/main.controller.js', 'src/public/app/**/*.js'];

gulp.task('css', function(){
    return gulp.src(css)
        .pipe(concat('theme.css'))
        .pipe(gulp.dest('src/public/'))
});

gulp.task('sass', function () {
    return gulp.src(['src/public/app/*.scss', 'scr/public/app/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('src/public/'));
});

gulp.task('js', function() {
    gulp.src(lib)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('src/public/'));

    gulp.src(jsApp)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('src/public/'))
});

gulp.task('app', function(){
    gulp.src(jsApp)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('src/public/'))
});

gulp.task('watch', function () {
    gulp.watch(['public/app/*.js',
        'src/public/app/**/*.js',
        'src/public/app/**/*.scss',
        'src/public/app/*.scss'
    ],['app', 'sass']);
});

gulp.task('webserver', function() {
    gulp.src('public/')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', ['js','app', 'css', 'sass', 'watch']);

/**
 * Created by HP on 12/19/2016.
 */
