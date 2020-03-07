const { src, dest, watch, parallel, series } = require('gulp'),
  sass = require('gulp-sass'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  htmlMin = require('gulp-htmlmin'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  changed = require('gulp-changed'),
  uglify = require('gulp-uglify'),
  lineec = require('gulp-line-ending-corrector'),
  rollup = require('gulp-better-rollup'),
  babel = require('rollup-plugin-babel'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs');

const inPut = {
  scssPath: 'src/scss/**/*.scss',
  jsPath1: 'src/js/main.js',
  jsPath2: 'src/js/app.js',
  imgPath: 'src/img/*',
  htmlPath: 'src/pages/**/*.html'
};

const outPut = {
  cssPath: 'dist/css/',
  jsPath: 'dist/js/',
  imgPath: 'dist/img/',
  htmlPath: 'dist'
};

function styles() {
  return src(inPut.scssPath)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(lineec())
    .pipe(dest(outPut.cssPath))
    .pipe(browserSync.reload({ stream: true })); // prompts a reload after compilation
}

function scripts1() {
  return src(inPut.jsPath1)
    .pipe(sourcemaps.init())
    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(concat('all.js'))
    .pipe(lineec())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(outPut.jsPath))
    .pipe(browserSync.reload({ stream: true })); // prompts a reload after compilation
}

function scripts2() {
  return src(inPut.jsPath2)
    .pipe(sourcemaps.init())
    .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(concat('apps.js'))
    .pipe(lineec())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(outPut.jsPath))
    .pipe(browserSync.reload({ stream: true })); // prompts a reload after compilation
}

function imgmin() {
  return src(inPut.imgPath)
    .pipe(changed(outPut.imgPath))
    .pipe(dest(outPut.imgPath))
    .pipe(browserSync.reload({ stream: true })); // prompts a reload after compilation
}

function pages() {
  return src(inPut.htmlPath)
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest(outPut.htmlPath))
    .pipe(browserSync.reload({ stream: true })); // prompts a reload after compilation
}

function dev() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: './dist'
    }
  });

  watch(
    [
      inPut.scssPath,
      inPut.jsPath1,
      inPut.jsPath2,
      inPut.htmlPath,
      inPut.imgPath
    ],
    parallel(styles, scripts1, scripts2, pages, imgmin)
  ).on('change', browserSync.reload);
}

function clean() {
  return del(['dist/**', '!dist'], { force: true });
}

exports.styles = styles;
exports.scripts1 = scripts1;
exports.scripts2 = scripts2;
exports.imgmin = imgmin;
exports.pages = pages;
exports.clean = clean;
exports.dev = dev;

const build = parallel(dev);
//gulp.task('default', build);
exports.default = series(
  clean,
  parallel(styles, scripts1, scripts2, imgmin, pages),
  dev
);
