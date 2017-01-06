// base
import gulp from 'gulp';
import browser from 'browser-sync';

// path
import config from '../config.json';

// setting path
const inputSrc = config.root.src + '/**/*.html';

gulp.task('copy_html', () => {
    gulp.src(inputSrc)
      .pipe(gulp.dest(config.root.dist + '/'))
      .pipe(browser.reload({stream: true}));
});
