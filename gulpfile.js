var gulp = require('gulp');
var sass = require('gulp-sass');

// Copy dependencies from node_modules to vendor
gulp.task('vendor', function(done) {

  // Bulma
  gulp.src([
      'node_modules/bulma/**/*'
    ])
    .pipe(gulp.dest('vendor/bulma'))

  // jQuery
  gulp.src([
      'node_modules/jquery/dist/**/*'
    ])
    .pipe(gulp.dest('vendor/jquery'))

  // Font Awesome Free
  gulp.src([
      'node_modules/@fortawesome/fontawesome-free/**/*'
    ])
    .pipe(gulp.dest('vendor/font-awesome'))

  done();
});

// Compile SCSS
gulp.task('sass', function() {
  return gulp.src('scss/oor.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

// Auto Compile
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  // Other watchers
});