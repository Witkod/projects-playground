var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./Ministrancka"
    });

    gulp.watch("Ministrancka/*.html").on('change', browserSync.reload);
    gulp.watch("Ministrancka/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);