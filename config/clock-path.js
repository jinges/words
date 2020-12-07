var root = 'app/clock';
var tmp_root = '/Users/feng/Documents/works/vue/clock';
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
            build: tmp_root + '/images'
        },
        styles: {
            source: [
                root + '/sass/*.scss'
            ],
            build: tmp_root + '/css'
        },
        fonts: {
          source: [
            root + '/sass/font/*',
          ],
          build: tmp_root + '/css/font'
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
            build: tmp_root + '/js'
        },
        pub_imgs: './images',
        // pub_imgs: '/Public/Wsite/aasyfm/images'
    },
    tmp_root: tmp_root
}

module.exports = pcpaths;