const { src, dest, watch, parallel, series } = require('gulp'),
  //babel = require('gulp-babel'),
  sass = require('gulp-sass'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  htmlMin = require('gulp-htmlmin'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  changed = require('gulp-changed'),
  // uglify = require('gulp-uglify'),
  terser = require('gulp-terser'),
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
  htmlPath: 'src/**/*.html'
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
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(lineec())
    .pipe(dest(outPut.cssPath));
}

function scripts1() {
  return (
    src(inPut.jsPath1)
      .pipe(sourcemaps.init())
      .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
      // .pipe(
      //   babel({
      //     presets: ['@babel/env']
      //   })
      // )
      .pipe(concat('all.js'))
      // .pipe(uglify())
      .pipe(terser())
      .pipe(lineec())
      .pipe(sourcemaps.write('.'))
      .pipe(dest(outPut.jsPath))
  );
}

function scripts2() {
  return (
    src(inPut.jsPath2)
      .pipe(sourcemaps.init())
      .pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
      // .pipe(
      //   babel({
      //     presets: ['@babel/env']
      //   })
      // )
      .pipe(concat('apps.js'))
      // .pipe(uglify())
      .pipe(terser())
      .pipe(lineec())
      .pipe(sourcemaps.write('.'))
      .pipe(dest(outPut.jsPath))
  );
}

function imgmin() {
  return src(inPut.imgPath)
    .pipe(changed(outPut.imgPath))
    .pipe(dest(outPut.imgPath));
}

function pages() {
  return src(inPut.htmlPath)
    .pipe(htmlMin({ removeComments: true }))
    .pipe(dest(outPut.htmlPath));
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

// const build = parallel(dev);
//gulp.task('default', build);
exports.default = series(
  clean,
  parallel(styles, scripts1, scripts2, imgmin, pages)
);
