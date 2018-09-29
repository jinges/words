var root = 'app/web';
var tmp_root = 'build/web';
var pcpaths = {
    origin:{
        root: root,
        html: {
            source: root + '/*.html',
            build: tmp_root
        },
        images: {
            source: [
                root + '/assets/img/*.*',
                root + '/images/icons/*.*'
            ],
            build: tmp_root + '/assets/img'
        },
        styles: {
            source: [
                root + '/assets/sass/*.scss',
                root + '/assets/css/*.css'
            ],
            build: tmp_root + '/assets/css'
        },
        files: {
            source: [
                root + '/service_worker.js',
                root + '/sw.js',
                root + '/manifest.json',
                root + '/assets/js/socket.io.js'
            ],
            build: tmp_root + '/'
        },
        script: {
            source: [
                root + '/assets/js/jquery.min.js',
                root + '/assets/js/script.js'
            ],
            build: tmp_root + '/assets/js'
        }
    },
    tmp_root: 'build/web'
}

module.exports = pcpaths;