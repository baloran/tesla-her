var gulp = require('gulp');
var useref = require('gulp-useref');
var plumber = require('gulp-plumber');
var atImport = require("postcss-import");
var nodemon = require('gulp-nodemon');

var postcss = require('gulp-postcss');
var processors = [
  require('postcss-mixins'),
  atImport(),
  require('postcss-hexrgba'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('cssnano'),
  require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] })
];

/**
 * BrowserSync
 * and reload
 */
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('scss', function () {
  gulp.src('public/assets/css/app.css')
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest('server/client/css'))
    .pipe(browserSync.stream());
});

gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'server/app.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});


gulp.task('reload', function () {

  reload();
});

/**
*  Watch
*  for reload
*/
gulp.task('watch', ['nodemon', 'scss'], function ()  {

  browserSync.init(null, {
    proxy: "http://localhost:5677",
        browser: "google chrome",
        port: 7000,
  });

  gulp.watch("public/assets/css/**/*.css", ['scss']);
  gulp.watch("server/client/views/**/*.hbs", ['reload']);
});