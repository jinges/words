var root = 'app/game';
var tmp_root = 'build/game';
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
            ],
            build: tmp_root + '/assets/img'
        },
        styles: {
            source: [
                root + '/assets/sass/*.scss'
            ],
            build: tmp_root + '/assets/css'
        },
        files: {
          source: [
            root + '/assets/js/jquery.min.js',
          ],
          build: tmp_root + '/assets/js'
        },
        script: {
            source: [
                root + '/assets/js/scan.js',
                root + '/assets/js/start.js',
                root + '/assets/js/header.js',
                root + '/assets/js/word.js',
                root + '/assets/js/script.js'
            ],
            build: tmp_root + '/assets/js'
        }
    },
    tmp_root: 'build/game'
}

module.exports = pcpaths;