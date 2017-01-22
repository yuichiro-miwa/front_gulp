// base
import gulp from 'gulp';
import browser from 'browser-sync';

// path
import config from '../config.json';

gulp.task('server', () => {
  browser({
    server: {
      baseDir: config.root.dist
    }
  });
});
