var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./Stronki z Adamem 4"
    });

    gulp.watch("Stronki z Adamem 4/*.html").on('change', browserSync.reload);
    gulp.watch("Stronki z Adamem 4/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);