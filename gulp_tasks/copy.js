//base
import gulp from 'gulp';
import browser from 'browser-sync';

//path
import config from '../config.json';

// setting path
const input_src = config.root.src + '/**/*.html';

gulp.task('copy_html', () => {
    gulp.src(input_src)
      .pipe(gulp.dest(config.root.dist + '/'))
      .pipe(browser.reload({stream: true}))
})
