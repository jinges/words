var root = 'app/ballot';
var ballotpaths = {
    origin:{
        root: root,
        page: root+'/*.html',
        images: root+'/assets/img/**/*.*',
        styles: [
            root+'/assets/sass/*.scss',
            root+'/assets/sass/!_*.scss'
            ],
        scripts: [
        	'node_modules/zepto/dist/zepto.js',
            root+'/assets/js/lrz.bundle.js',
            root+'/assets/js/script.js',
            root+'/assets/js/config.js',
            root+'/assets/js/fetch.js',
            root+'/assets/js/banner.js',
            root+'/assets/js/vote.js',
            root+'/assets/js/upload.js',
            root+'/assets/js/vote.js',
            root+'/assets/js/join.js',
            root+'/assets/js/ranking.js'
        ]
    },
    tmp_root: 'build/ballot'
}

module.exports = ballotpaths;