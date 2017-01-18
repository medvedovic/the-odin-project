/* $ npm init */

/* $ npm install gulp --save-dev */

/*
|- app/
    |- css/
    |- fonts/
    |- images/ 
    |- index.html
    |- js/ 
    |- scss/
|- dist/
|- gulpfile.js
|- node_modules/
|- package.json
*/

/* create gulpfile.js */

var gulp = require('gulp');

/* $ npm install gulp-sass --save-dev */

var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

/* $ npm install browser-sync --save-dev */

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

/*
    <!--build:js js/main.min.js -->
    <script src="js/lib/a-library.js"></script>
    <script src="js/lib/another-library.js"></script>
    <script src="js/main.js"></script>
    <!-- endbuild -->
*/

/* $ npm install gulp-useref --save-dev */

var useref = require('gulp-useref');
/*
    gulp.task('useref', function() {
        return gulp.src('app/*.html')
            .pipe(useref())
            .pipe(gulp.dest('dist'));
    })
*/

/* $ npm install gulp-uglify --save-dev  */
/* $ npm install gulp-if --save-dev  */

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
/*
    gulp.task('useref', function() {
        return gulp.src('app/*.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulp.dest('dist'));
    })
*/

/* $ npm install gulp-cssnano */

/*
    <!--build:css css/styles.min.css-->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/another-stylesheet.css">
    <!--endbuild-->
*/

var cssnano = require('gulp-cssnano');
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
})

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

/* $ npm install del --save-dev */
var del = require('del');
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback);
});

/* $ npm install run-sequence --save-dev */
var runSequence = require('run-sequence');
gulp.task('build', function(callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'fonts', 'img', 'graphic'],
    callback
    )
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'],
    callback
    )
})

/* $npm install gulp-imagemin --save-dev */
// var imagemin = require('gulp-imagemin');
// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'))
// });

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
})

gulp.task('graphic', function() {
    return gulp.src('app/graphic/**/*')
        .pipe(gulp.dest('dist/graphic'))
})

/* Installs dependencies */
/* $npm install */