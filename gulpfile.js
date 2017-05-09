var gulp = require("gulp");
var ts = require("gulp-typescript");
var watch = require("gulp-watch");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var less = require("gulp-less");
var tsProject = ts.createProject("./tsconfig.json");
var connect = require("gulp-connect");


/*
compile typescript
*/
gulp.task("typescript", function() {
    var tsResult = gulp.src("./laPalestra-backend/src/main/resources/static/web/scripts/*.ts").pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("./laPalestra-backend/src/main/resources/static/web/scripts"));
});

/*
Web server to test app
*/
gulp.task("webserver", function() {
    connect.server({
        livereload: false,
        root: [".", "./laPalestra-backend/src/main/resources/static"]
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
    gulp.src("./laPalestra-backend/src/main/resources/static/web/styles/main.less")
    .pipe(less())
    .pipe(gulp.dest("./laPalestra-backend/src/main/resources/static/web/styles"));
});

/*
browserify
*/
gulp.task("browserify", function(stream) {
    browserify("./laPalestra-backend/src/main/resources/static/web/scripts/laPalestra.js").bundle().pipe(source("mainFile.js")).pipe(gulp.dest("./laPalestra-backend/src/main/resources/static/web/scripts"));
});


/*
Watch typescript and less
*/
gulp.task("watch", function() {
    gulp.watch("./laPalestra-backend/src/main/resources/static/web/styles/*.less", ["less"]);
    gulp.watch("./laPalestra-backend/src/main/resources/static/web/**/*.ts", ["typescript", "browserify"]);
})

/*
default task
*/
gulp.task("default",["less", "typescript", "browserify", "webserver", "watch"]);