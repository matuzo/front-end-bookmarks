var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
 
gulp.task('css', function () {
  return gulp.src(['./src/assets/css/prism.css', './src/assets/css/style.css'])
    .pipe(concat('style.min.css'))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('cssNano', function () {
  return gulp.src(['./src/assets/css/style_medium.css'])
    .pipe(postcss([cssnano()]))
    .pipe(rename("style_medium.min.css"))

    .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/assets/js/*.js')
    .pipe(uglify({compress: {drop_console: true}}))
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest('./src/assets/js/'));
});

gulp.task('build', gulp.series('css', 'cssNano'));
