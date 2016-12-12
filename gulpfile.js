var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./strona"
    });

    gulp.watch("strona/*.html").on('change', browserSync.reload);
    gulp.watch("strona/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);