var root = 'app/group-buy';
var tmp_root = 'build/group-buy';
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
                root + '/assets/img/images/*.*',
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
            root + '/assets/font/*',
          ],
          build: tmp_root + '/assets/font'
        },
        script: {
            source: [
                root + '/assets/js/*.js',
            ],
            build: tmp_root + '/assets/js'
        }
    },
    tmp_root: 'build/group-buy'
}

module.exports = pcpaths;