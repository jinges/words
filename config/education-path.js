var root = 'app/education';
var tmp_root = '/Users/feng/Documents/works/vue/education';
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
                root + '/images/v4/*.*',
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
            root + '/sass/4-font/*',
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
        pub_imgs: '/Public/Wsite/education/images'
    },
    tmp_root: tmp_root
}

module.exports = pcpaths;