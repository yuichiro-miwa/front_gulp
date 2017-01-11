// base
import gulp from 'gulp';
import browser from 'browser-sync';

// css
import scss from 'gulp-sass';
// browserslistを使用 => package.json
import autoprefixer from 'gulp-autoprefixer';
import csscomb from 'gulp-csscomb';

// error
import plumber from 'gulp-plumber';

// etc
import using from 'gulp-using';
import cached from 'gulp-cached';
import remember from 'gulp-remember';

// path
import config from '../config.json';

// setting path
const inputSrc = config.root.src + '/scss/**/*.scss',
      distSrc = config.root.dist + '/common/css/';

gulp.task('scss', () => {
  gulp.src(inputSrc)
      .pipe(plumber({
            errorHandler: (err) => {
                console.log(err.messageFormatted);
                this.emit('end');
             }
      }))
      .pipe(cached())
      .pipe(using())
      .pipe(scss())
      .pipe(remember())
      .pipe(autoprefixer({cascade: false}))
      .pipe(csscomb())
      .pipe(gulp.dest(distSrc))
      .pipe(browser.reload({stream: true}));
});
