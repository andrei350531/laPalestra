var gulp = require("gulp");
var ts = require("gulp-typescript");
var watch = require("gulp-watch");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var less = require("gulp-less");
var tsProject = ts.createProject("tsconfig.json");
var connect = require("gulp-connect");


/*
compile typescript
*/
gulp.task("typescript", function() {
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("web/scripts"));
});

/*
Web server to test app
*/
gulp.task("webserver", function() {
    connect.server({
        livereload: false,
        root: [".", "./web"]
    });
});

/*
Automatic Live Reload
*/
gulp.task("livereload", function() {
    gulp.src(["web/styles/*.css", "web/scripts/*.js"])
    .pipe(watch(["web/styles/*.css", "web/scripts/*.js"]))
    .pipe(connect.reload());
});


/*
compile less files
*/
gulp.task("less", function() {
    gulp.src("web/styles/styles.less")
    .pipe(less())
    .pipe(gulp.dest("web/styles"));
});

/*
browserify
*/
gulp.task("browserify", function() {
    browserify("./web/scripts/main.js").bundle().pipe(source("mainFile.js")).pipe(gulp.dest("web/scripts"));
});


/*
Watch typescript and less
*/
gulp.task("watch", function() {
    gulp.watch("web/styles/*.less", ["less"]);
    gulp.watch("web/**/*.ts", ["typescript", "browserify"]);
})

/*
default task
*/
gulp.task("default",["less", "typescript", "browserify", "webserver", "watch"]);