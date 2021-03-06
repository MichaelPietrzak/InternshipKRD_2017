// Less configuration
var
    gulp = require('gulp'), 
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function () {
  return gulp.src('./Styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('./Styles/**/*.less', ['less']);
});
