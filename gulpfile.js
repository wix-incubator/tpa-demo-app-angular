var gulp = require('gulp');

require('./tasks/css');
require('./tasks/babel');
require('./tasks/copy');
require('./tasks/serve');

gulp.task('default', ['serve', 'css', 'babel', 'copy'], function () {
    gulp.watch('src/css/*.scss', ['css']);
    gulp.watch('src/**/*.js', ['babel']);
    gulp.watch('src/**/*.html', ['babel']);
});
