var gulp = require('gulp'),
  jasmine = require('gulp-jasmine'),
  tsc = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps');

var tsProject = tsc.createProject("tsconfig.json");
gulp.task('build', function () {
  return gulp.src([
    './**/**.ts',
    '!./node_modules/**'
  ])
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject))
    .js
    .pipe(sourcemaps.write('../maps', {
      includeContent: false,
      sourceRoot: function (file) {
        // needed to fix relative path in sourceMaps
        var path = '../'.repeat((file.relative.match(/\//g) || []).length + 1);
        return path;
      }
    }))
    .pipe(gulp.dest('lib'));
})

gulp.task('tests-no-build', function () {
  return gulp.src('./lib/spec/*.js')
    .pipe(jasmine({ includeStackTrace: true, verbose: true }));
});

gulp.task('tests', ['build'], function () {
  return gulp.src('./lib/spec/*.js')
    .pipe(jasmine({ includeStackTrace: true, verbose: true }));
});

//alternative name for the 'tests' task
gulp.task('specs', ['tests']);