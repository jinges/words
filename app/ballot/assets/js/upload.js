var imgs = [];
function setImageShow(file, that){
    var num = Math.floor(Math.random()*(99999999-10000000)+10000000)
    uploader(file, function(err, imgurl, data){
        if(err) {
            $("#"+num).addClass('err').append('<em class="del"></em>');
            delImg(num)
            alert(err);
            return false;
        }
        if(imgurl){
            var $div = $('<div id="'+num+'" class="upload-icon"></div>');
            $div.css({'background': 'url('+imgurl+') 50% 50% no-repeat', 'background-size': 'cover'});
            $li = $('<li></li>');
            $li.append($div);
            that.parent().parent().before($li);
        }

        if(data) {
            imgs.push(data.img_src);
            params.imgs = imgs;
            $("#"+num).addClass('done');
        }
    })
}

function delImg(num){
    $(".err").click(function(){
        $("#"+num).parent().remove();
        $('#upload-file').parent().parent().show()
    })
}

function uploader(file, cb){
    lrz(file, {
        width: 800
    })
    .then(function (rst) {
        cb(null, rst.base64);
        return rst;
    })
    .then(function (rst) {
        var imgUrl = rst.base64.replace('data:image/jpeg;base64,','');
        postData('uploader', {
            _FILES: imgUrl,
            type: 'web',
            handle: 'add'
        }, function(err, data){
            if(data.retCode){
                cb(data.retMsg);
                return false;
            }
            cb(null, null, data.data)
        })
    });
}

$('#upload-file').change(function(){
    var that = $(this);
    var files = that[0].files;
    var imgLength = that.parent().parent().siblings().length;
    var length = files.length;

    if((length + imgLength) >= 4) {
        length = (4 - imgLength);
        that.parent().parent().hide();
    }

    for(var i = 0, len = length;i<len;i++) {
        var file = files[i];
        setImageShow(file, that);
    }
})