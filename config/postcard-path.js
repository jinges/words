var root = 'app/postcard';
var tmp_root = '/Users/feng/Documents/works/vue/guo/postcard';
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
            build: tmp_root + '/images'
        },
        styles: {
            source: [
                root + '/sass/*.scss'
            ],
            build: tmp_root + '/css/v3'
        },
        fonts: {
          source: [
            root + '/sass/4-font/*',
          ],
          build: tmp_root + '/css/4-font'
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
            build: tmp_root + '/js/v3'
        },
        pub_imgs: '/Public/Wsite/postcard/images'
    },
    tmp_root: tmp_root
}

module.exports = pcpaths;