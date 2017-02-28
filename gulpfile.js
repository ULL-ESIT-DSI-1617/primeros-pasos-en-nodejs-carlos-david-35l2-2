//Dependencias
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('build', shell.task([
  'gitbook install', 'npm run build'
]));

gulp.task('default', ['build', 'deploy']);
