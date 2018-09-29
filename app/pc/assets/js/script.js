window.onload = function(){	
    var url = window.location.href;
    var height = $('.banner-text').siblings().height();
    var width = $('body').width();

    if(url.indexOf('.html')>=0) {
        $('.header-nav').find('#'+ url.match(/\w+\.html/).toString().replace(/\.html/, '') +'').addClass('active').siblings().removeClass('active');
    }
    
    $(".banner-box").css('height', height+"px");

    $(window).resize(function(){
    	window.location.reload();
    }).on('orientationchange',function(){
    	window.location.reload();
    });

    if(width < 1024) {
        return false;
    }

    $("#fullpage .banner-box").each(function(i, item){
        var img = item.lastElementChild;
        item.style.cssText = 'background: url('+img.src+') 0 0 no-repeat; background-size:cover;';
        img.style.cssText = 'display:none;';
    });
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': false,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
        'afterLoad': function(anchorLink, index){//页面初始化
        },

        'onLeave': function(index, nextIndex, direction){//离开页面触发的事件
        }
    });
}