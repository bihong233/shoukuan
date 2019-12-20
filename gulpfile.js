const { series, parallel, watch, src, dest } = require('gulp');
var browserSync = require('browser-sync').create();
var gulpsass        = require('gulp-sass');

function serve(cb) {
    browserSync.init({
        server: true,
        watch: true
    });
}

function sass() {
    return src("style/*.scss")
        .pipe(gulpsass())
        .pipe(dest("style"))
        .pipe(browserSync.stream())
}

watch(["style/*.scss"], series(sass))



exports.default = parallel(serve, sass);