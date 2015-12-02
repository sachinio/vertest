var gulp = require('gulp');
var typescript = require('gulp-tsc');

gulp.task('default', function(){
    gulp.src(['src/*.ts'])
        .pipe(typescript({out: 'visuals.js', target: 'ES5'}))
        .pipe(gulp.dest('bin/'))
});