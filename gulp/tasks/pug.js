const gulp = require("gulp");
const config = require("../config");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const util = require("gulp-util");

gulp.task("pug", function () {
  return gulp
    .src(config.src.pug + "/*.pug")
    .pipe(
      plumber(function (error) {
        util.log(error.message);
        this.emit("end");
      })
    )
    .pipe(pug({ pretty: true })) // compilation mode: false, true
    .pipe(gulp.dest(config.dest.html));
});

let build = function (gulp) {
  return gulp.series("pug");
};

let watch = function (gulp) {
  return function () {
    gulp.watch(config.src.pug + "/**/*.pug", gulp.series("pug"));
  };
};

module.exports.build = build;
module.exports.watch = watch;
