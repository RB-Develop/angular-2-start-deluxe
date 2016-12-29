const gulp = require('gulp');
const conf = require('../config/gulp.config');
const typedoc = require("gulp-typedoc");

gulp.task("typedoc", generateTypedoc);

function generateTypedoc() {
  return gulp
    .src([conf.path.src("**/*.ts")])
    .pipe(typedoc({
      mode: "file",
      out: "docs",
      theme: "default",
      ignoreCompilerErrors: "true",
      experimentalDecorators: "true",
      emitDecoratorMetadata: "true",
      target: "ES5",
      moduleResolution: "node",
      stripInternal: "true",
      suppressExcessPropertyErrors: "true",
      suppressImplicitAnyIndexErrors: "true",
      module: "commonjs"
    }));
}
