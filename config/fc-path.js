var root = 'app/FC';
var tmp_root = '/Users/feng/Documents/works/vue/fc';
var pcpaths = {
    origin:{
        root: root,
        html: {
            source: root + '/*.html',
            build: tmp_root
        },
        components: {
            source: root + '/components/**/*.html'
        },
        images: {
            source: [
                root + '/images/**/*.*',
            ],
            build: tmp_root + '/assets/images'
        },
        styles: {
            source: [
                root + '/sass/*.scss'
            ],
            build: tmp_root + '/assets/css'
        },
        fonts: {
          source: [
            root + '/sass/font/*',
          ],
          build: tmp_root + '/assets/css/font'
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
            build: tmp_root + '/assets/js'
        }
    },
    tmp_root: tmp_root
}

module.exports = pcpaths;