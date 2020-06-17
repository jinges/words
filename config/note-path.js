var root = 'app/note';
var tmp_root = 'build/note';
var pcpaths = {
    origin:{
        root: root,
        html: {
            source: root + '/*.html',
            build: tmp_root
        },
        components: {
            source: root + '/components/*/*.html'
        },
        images: {
            source: [
                root + '/images/*.*',
            ],
            build: tmp_root + '/images/v5'
        },
        styles: {
            source: [
                root + '/sass/*.scss'
            ],
            build: tmp_root + '/css/v5'
        },
        fonts: {
          source: [
            root + '/sass/5-font/*',
          ],
          build: tmp_root + '/css/5-font'
        },
        static: {
          source: [
            root + '/static/**/*.*',
          ],
          build: tmp_root + '/static'
        },
        script: {
            source: [
                root + '/js/source/*.js',
                root + '/js/*.js',
            ],
            build: tmp_root + '/js/v5'
        }
    },
    tmp_root: tmp_root
}

module.exports = pcpaths;