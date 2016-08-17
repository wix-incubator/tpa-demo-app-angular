var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
    nodemon({
        script: 'serve.js',
        watch: 'src', // watch ES2015 code
        ext: 'js css html'
    });
});