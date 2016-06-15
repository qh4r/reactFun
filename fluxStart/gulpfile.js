var gulp = require('gulp'),
    gulpUtil = require('gulp-util'), //lgowanie gulpa
    vinylSource = require('vinyl-source-stream'), //stramy (bundling)
    browserify = require('browserify'), //require po stronie frontu
    watchify = require('watchify'), //watch na zmianach plików
    reactify = require('reactify'), //kompilacja reacta
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify');


gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: ['./src/main.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) {
            gulpUtil.log('Working on file: ' + file);
        }
        return bundler
            .bundle()
            .on('error', gulpUtil.log.bind(gulpUtil, 'Error'))
            .pipe(vinylSource('app.js'))
            .pipe(streamify(uglify({
                mangle: {
                    except: ['React']
                }
            })))
            .pipe(gulp.dest('./dest/'))
    };
    build()
    bundler.on('update', build);
});