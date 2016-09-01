var gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src(['src/**/*.html','src/**/*.svg'])
        .pipe(gulp.dest('dist'));

    gulp.src(['vendors/**/*.*'])
        .pipe(gulp.dest('dist/vendors'));
});