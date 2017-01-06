//base
import gulp from 'gulp';
import browser from 'browser-sync';

//path
import requireDir from 'require-dir';
import config from './config.json';

requireDir('./gulp_tasks', {resucure: true});

gulp.task('default', ['server'], () => {
    gulp.watch(config.root.src + '/**/*.html', ['copy_html']);
    gulp.watch(config.root.src + '/common/sass/**/*.scss', ['scss']);
});
