'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import prefix from 'gulp-pleeease'
import browserSync from 'browser-sync'

const reload = browserSync.create()

// Directories
const dirs = {
  src: 'src',
  dest: 'public'
}

const js = {
  src: `${dirs.src}/js/*.js`,
  dest: `${dirs.dest}`
}

const scss = {
  src: `${dirs.src}/scss/*.scss`,
  dest: `${dirs.dest}`
}

const onError = function (err) {
  notify.onError({
    title: 'Error',
    message: 'Error: <%= error.message %>'
  })(err)
  this.emit('end')
}

// JS
gulp.task('js', () => {
  return gulp.src(js.src)
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(js.dest))
  .pipe(reload.stream())
})

// SCSS
gulp.task('scss', () => {
  return gulp.src(scss.src)
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(prefix({
    'minifier': false
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest(scss.dest))
  .pipe(reload.stream())
})

gulp.task('server', ['js', 'scss'], () => {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    logLevel: 'debug',
    logConnections: true,
    scrollProportionally: false
  })
  gulp.watch(js.src, ['js'])
  gulp.watch(scss.src, ['scss'])
})

gulp.task('default', ['server'])
