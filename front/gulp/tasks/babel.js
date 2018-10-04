const gulp = require('gulp');
const babel = require('gulp-babel');
var config = require('../config').js;
const uglify = require('gulp-uglify');
gulp.task('babel', () =>{
  return  gulp.src(config.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
});
