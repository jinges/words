var root = 'app/vr';
var vrPaths = {
    origin:{
        root: root,
        page: root+'/*.html',
        images: root+'/assets/img/**/*.*',
        styles: [
            // root+'/assets/sass/*.scss',
            ],
        scripts: [
            root+'/assets/js/libs/aframe.js'
        ]
    },
    tmp_root: 'build/vr'
}

module.exports = vrPaths;