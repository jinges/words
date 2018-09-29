var gulp = require('gulp'),
    concat = require('gulp-concat'),
    contentIncluder = require('gulp-content-includer'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    fs = require('fs'),
    opn = require('opn'),
    assetRev = require('gulp-asset-rev');

var paths = {};


function logError(err) {
    console.log(err.toString());
    this.emit('end');
}

var validateResources = function (resources) {
    resources.forEach(function (resource) {
        if(!resource.match(/\*/) && !fs.existsSync(resource)) {
            throw resource + "not found !";
        }
    });
}

gulp.task('clean', function (cb) {
    del( 'build', cb);
});

gulp.task('concat', function(){
    gulp.src(paths.origin.html.source)
        .pipe(contentIncluder({
            includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
            deepConcat: true,
            baseSrc: './'
        }))
        // .pipe(assetRev())
        // .pipe(rename('index.html'))
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.origin.html.build))
        .pipe(livereload());
});

gulp.task('sass', function () {
    console.log('run build sass files!')
    return gulp.src(paths.origin.styles.source)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(minifyCss())
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(gulp.dest(paths.origin.styles.build))
        .pipe(livereload());
});

gulp.task('script', function () {
    return gulp.src(paths.origin.script.source)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.origin.script.build))
        // .pipe(assetRev())
        // .pipe(uglify())
        .pipe(rename({
          extname: '.min.js'
        }))
        .pipe(gulp.dest(paths.origin.script.build))
        .pipe(livereload());
});

gulp.task('transFiles', function(){
    return gulp.src(paths.origin.files.source)
        .pipe(gulp.dest(paths.origin.files.build))
        .pipe(livereload());
})

gulp.task('images', function() {
    return gulp.src(paths.origin.images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.origin.images.build))
        .pipe(livereload());
});


gulp.task('connect', ['concat', 'sass', 'script', 'images', 'transFiles'], function () {
    connect.server({
        livereload:true,
        root: paths.tmp_root,
        port: 8088
    });

    livereload.listen();
})

gulp.task('watch', function () {
    gulp.watch(paths.origin.html.source, ['concat']);
    gulp.watch(paths.origin.styles.source, ['sass']);
    gulp.watch(paths.origin.files.source, ['transFiles']);
    gulp.watch(paths.origin.script.source, ['script']);
    gulp.watch(paths.origin.images.source, ['images']);
    livereload.listen();
});

gulp.task('web-config', function(){
    var webPath = require('./config/web-path.js');
    paths = webPath;
})

gulp.task('ballot-config', function(){
    var ballotPath = require('./config/ballot-path.js');
    paths = ballotPath;
})
gulp.task('vr-config', function () {
    var vrPath = require('./config/vr-path.js');
    paths = vrPath;
})
gulp.task('game-config', function () {
    var vrPath = require('./config/game-path.js');
    paths = vrPath;
})

gulp.task('web', ['web-config', 'connect', 'watch'], function(){
    opn('http://localhost:8080');
})

gulp.task('ballot', ['ballot-config', 'connect', 'watch'], function(){
    opn('http://localhost:8080');
})

gulp.task('vr', ['vr-config', 'connect', 'watch'], function () {
    opn('http://localhost:8080');
})

gulp.task('game', ['game-config', 'connect', 'watch'], function () {
    opn('http://localhost:8088');
})
