const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function image() {
    const imagemin = await import('gulp-imagemin');
    return gulp.src('./src/image/**/*')
        .pipe(imagemin.default())
        .pipe(gulp.dest('./dist/image'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(styles, image);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
