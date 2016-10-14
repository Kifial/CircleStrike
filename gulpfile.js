var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var prefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var glob = require('gulp-sass-glob');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('style', function() {
  return gulp.src('app/styles/main.scss')
    .pipe(plumber())
    .pipe(glob())
    .pipe(sass())
    .pipe(prefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'));
});

var webpackConfig = {
  entry: `./app/scripts/client/index.js`,
  output: {
    path: `dist/js/client/`,
    filename: 'app.js'
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"],
    extensions: ["loader.js", ".js", '']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

gulp.task('scripts', () => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack", err);
    }
    gutil.log("[webpack]", stats.toString({
      chunks: false,
      colors: true,
      errorDetails: true
    }));
  });
});

gulp.task('markup', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', ['style']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/*.html', ['markup']);
});