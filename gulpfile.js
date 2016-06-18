const gulp = require('gulp');
//const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
//const Karma = require('karma').Server;
const del = require('del');

gulp.task('webpack:dev', ['cleanfiles:dev'], function() {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

// gulp.task('webpack:test', function() {
//   return gulp.src('./test/client/entry.js')
//     .pipe(webpack({
//       output: {
//         filename: 'test_bundle.js'
//       }
//     }))
//     .pipe(gulp.dest('test/client'));
// });

gulp.task('cleanfiles:dev', function() {
  return del('build');
})

gulp.task('staticfiles:dev', ['cleanfiles:dev'], function() {
  return gulp.src('./app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('staticcssfiles:dev', ['cleanfiles:dev'], function() {
  return gulp.src('./app/css/*.css')
  .pipe(gulp.dest('build/'));
});

gulp.task('watch:build', function() {
  gulp.watch('./app/**/*', ['build:dev']);
});

// gulp.task('servertests', function() {
//   return gulp.src('./test/api_test/**/*tests.js')
//     .pipe(mocha({reporter: 'nyan'}))
//     .once('error', function(err) {
//       console.log(err);
//       process.exit(1);
//     })
//     .once('end', function() {
//       if (this.seq.length === 1 && this.seq[0] === 'servertests')
//         process.exit();
//     }.bind(this));
// });

// gulp.task('karmatests', ['webpack:test'], function(done) {
//   new Karma({
//     configFile: __dirname + '/karma.conf.js'
//   }, done).start();
// });

gulp.task('build:dev', ['staticfiles:dev','staticcssfiles:dev', 'webpack:dev']);
gulp.task('default', ['build:dev']);
