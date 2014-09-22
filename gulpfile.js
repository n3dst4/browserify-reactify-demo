var gulp = require("gulp");
var _ = require("lodash");

gulp.task("default", function (cb) {
    var browserify = require("browserify");
    var vinylSource = require("vinyl-source-stream");

    var bundle = browserify().
        add("./index.js").
        external("react").
        bundle().
        pipe(vinylSource("compiled.js")).
        pipe(gulp.dest("."));
});

