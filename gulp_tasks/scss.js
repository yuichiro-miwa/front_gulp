//base
import gulp from 'gulp';
import browser from 'browser-sync';

//css
import scss from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import csscomb from 'gulp-csscomb';

//error
import plumber from 'gulp-plumber';

//etc
import using from 'gulp-using';
import cached from 'gulp-cached';
import remember from 'gulp-remember';

//path
import config from '../config.json';

// setting path
const input_src = config.root.src + '/scss/**/*.scss',
      dist_src = config.root.dist + '/common/css/';

// autoprefixer options
const autoprefixer_options = {
      //対象ブラウザは適時記述
      browsers: [
        'last 2 versions',
      ],
      // cssの整形に関して
      cascade: false
};

gulp.task('scss', () => {
  gulp.src(input_src)
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
      .pipe(autoprefixer(autoprefixer_options))
      .pipe(csscomb())
      .pipe(gulp.dest(dist_src))
      .pipe(browser.reload({stream: true}))
});
                
