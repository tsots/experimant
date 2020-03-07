'use strict';

const gulpDev = require('./gulpfile-dev');
const gulpBuild = require('./gulpfile-build');
const { task, parallel, series } = require('gulp');

task('dev', gulpDev.default);
task('build', gulpBuild.default);
