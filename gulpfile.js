var gulp = require("gulp")
var fs = require("fs")
var browserify = require("browserify")
var babelify = require("babelify")

/**
 * Watch for changes in JS files
 */
gulp.task("watch", function(){
  gulp.watch("./src/**/*.js", function(evt){
    console.log("Change detected in " + evt.path)
    browserify({ debug: true })
      .transform(babelify, {presets: ["es2015", "stage-0"]})
      .require("./src/index.js", { entry: true })
      .bundle()
      .on("error", function (err) { console.log("Error: " + err.message) })
      .pipe(fs.createWriteStream("./dist/index.js")
    )
  })
})
