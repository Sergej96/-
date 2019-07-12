var gulp         = require('gulp');

gulp.task('serve', ['sass'], function() {

	browserSync.init({

	server: "src/"

});

gulp.watch("src/css/*.css").on('change', browserSync.reload);
gulp.watch("src/*.html").on('change', browserSync.reload);

});