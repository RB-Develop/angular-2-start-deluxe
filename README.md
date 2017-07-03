# Angular Starter Deluxe
A starter project for a complete Angular project that uses Bootstrap 4 and Font Awesome for the styling of the web app. Also has 
the following dependencies:

 - WebPack for transpiling TypeScript and bundling other resources.
 - Karma for unit testing.
 - TSLint for linting the TypeScript source files.
 - TypeDoc to generate documentation from comment block in the TypeScript source.
 - Instanbul and Instanbul-remap for generating unit test coverage reports that are remapped from the transpiled JavaScript source
 to the original TypeScript source.
 - Gulp 4.0 for some other small tasks such as Browsersync to serve the files locally.

## Note
This project uses Gulp 4.0 even though it is not yet officially released at the time of creating this repository. To work around this
the `gulp4` dependency is used in the `package.json`. You will have to create a softlink in the `node_modules` folder from `gulp` to `gulp4`
so that the `gulp-cli` can use Gulp 4.0. See below for instructions on how to achieve this.

    # Execute from the node_modules folder
    # Linux command
    ln -s gulp4 gulp
    
    # Execute from the node_modules folder
    # Windows command (PowerShell)
    cmd /c mklink gulp gulp4