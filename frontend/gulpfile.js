var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
    log('Analyzing source with TSLint')
    
   return gulp
        .src(config.allts) 
        .pipe($.if(args.verbose, $.print()))
        .pipe($.tslint())
        .pipe($.tslint.report($.tslintStylish, {
            emitError: false,
            sort: true,
            bell: false,
            fullPath: true
        }));        
});

//////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}