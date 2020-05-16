var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var sourcemap = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var minify = require('gulp-minify');

//start html task

gulp.task('html', () => {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});

//start css task

gulp.task('css', () => {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemap.init())
        .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
});

//start js task

gulp.task('js', () => {
    return gulp.src('stage/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

//start watch all tasks
gulp.task('watch', () => {
    require('./server');
    livereload.listen();
    gulp.watch('stage/html/*.pug', gulp.series('html'));
    gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.scss'], gulp.series('css'));
    gulp.watch('stage/js/*.js', gulp.series('js'));

});