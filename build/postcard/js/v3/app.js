$(function(){
  $('.group').on('click', 'li', function(){
    var $this = $(this);
    var list = $this.parent().find('img');
    var index = $this.index();
    var wrapper = $('.swiper-wrapper');
    var sw = window.screen.width;
    wrapper.html('').siblings('.loading').show();
    list.map(function(i, img){
      var item = $('<div class="swiper-slide"></div>');
      // if(i == index -1){
      //   item.addClass('wiper-slide-prev');
      // }
      // if(i == index){
      //   item.addClass('swiper-slide-active');
      // }
      // if(i == index + 1){
      //   item.addClass('wiper-slide-next');
      // }
      item.append($(img).clone());
      wrapper.append(item);
    });
    var swiper = new Swiper('.swiper-container');
    wrapper.parent().show();
    setTimeout(function(){
      var active = wrapper.css({'transform': 'translate3d('+(sw * index * -1)+'px, 0px, 0px)'}).find('.swiper-slide').eq(index);
      active.addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active').removeClass('swiper-slide-next');
      if(active.prev().length){
        active.prev().addClass('wiper-slide-prev');
      }
      if(active.next().length){
        active.next().addClass('wiper-slide-next');
      }
    }, 200);
    setTimeout(function(){
      wrapper.siblings('.loading').hide();
    }, 400);
  });

  $('.swiper-container').on('click', '.swiper-slide', function(){
      $(this).parents('.swiper-container').hide();
  });
  
  $('#copy').on('click', function(){
    if($('.toast').length) {
      return false;
    }
    var toast = $('<div class="toast">复制成功</div>');
    
    $('body').append(toast);

    setTimeout(function(){
      $('.toast').remove();
    }, 3000)
  });

  (function(){
    if($('.index').length) {
      var imgs = $('.imgs');
      var bw = screen.width - imgs.offset().left * 2;
      var w = (bw - 6) / 2;
      var h = w * 4 / 3;
      var c = imgs.find('li').length;
  
      imgs.css('width', bw+ 'px').find('ul').css('width', (w * c +  6 * ( c -1)) + 'px').find('li').css({'width': w + 'px', 'height': h + 'px'});
  
      var grop = $('.group li');
      var gw = grop.width();
  
      grop.css('height', gw+'px');
    }
  })()
})