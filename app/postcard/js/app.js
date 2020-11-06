$(function(){
  var sw = window.screen.width;
  var swiper = new Swiper('.swiper-container', {
    speed: 100,
    observer:true,
    observeParents:true
  });;
  
  $('.group, .imgbox').on('click', 'li', function(){
    var $this = $(this);
    var wrapper = $('.swiper-wrapper');
    var index = $this.index();
    var list = $this.parent().find('li').clone();
    list.removeAttr('style');
    wrapper.html(list.addClass('swiper-slide'));
    swiper.slideTo(index);
    swiper.update();
    wrapper.parent().show();
    // wrapper.siblings('.loading').hide();
  });

  $('.swiper-container').on('click', '.swiper-slide', function(){
    $(this).parents('.swiper-container').hide();
  });

  
  $('#copy,.handle .copy,.golden .copy').on('click', function(){
    if($('.toast').length) {
      return false;
    }
    var toast = $('<div class="toast">复制成功</div>');
    
    $('body').append(toast);

    setTimeout(function(){
      $('.toast').remove();
    }, 1000)
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
  })();

  $('body').on('click', '.video_bar .shoucang', function(){
    var $this = $(this);
    if($this.hasClass('icon-shoucang2')){
      $this.removeClass('icon-shoucang2')
    } else {
      $this.addClass('icon-shoucang2')
    }
  }).on('click', '.nav .cell', function(){
    var $this = $(this);
    $this.find('a').addClass('active');
    $this.siblings().find('a').removeClass('active');
  }).on('click', '.find .more_read', function(){
    var $this = $(this);
    var p = $this.parents('li').find('.content p');
    if(p.hasClass('ov')){
      p.removeClass('ov');
      $this.text('收起');
    } else {
      p.addClass('ov');
      $this.text('展开');
    }
  });

  // (function(){
  //   var startTime = new Date();
  //   $('body').on('click','.sigle .option p', function(){
  //     $(this).addClass('sel').siblings().removeClass('sel');
  //   }).on('click','.multiple .option p', function(){
  //     var $this = $(this);
  //     if($this.hasClass('sel')){
  //       $(this).removeClass('sel');
  //     } else {
  //       $(this).addClass('sel');
  //     }
  //   }).on('click', '.question .sub', function(){
  //     var endTime = new Date();
  //     var second = endTime - startTime;
  //     var answer = ['A','B','C', 'D'];
  //     var defaultAns = [["A"],["A"],["A"],["D"],["D"],["B"],["C"],["B"],["B"],["C"],["C"],["B"],["A","B","C","D"],["B","C","D"],["A","B"]];
  //     // $('.answer').map((j,an)=> {
  //     //   var an = $(an).text().split(':')[1].split('');
  //     //   defaultAns.push(an);
  //     // });

  //     var count = 0;
  //     $('.option').map((i, obj)=>{
  //       var an = defaultAns[i];
  //       var flag = false;
  //       var userSel = $(obj).find('.sel');
  //       if(userSel.length){
  //         flag = true;
  //         userSel.map((j,item)=>{
  //           var $item = $(item);
  //           var index = $item.index();
  //           var selAns = answer[index];
  //           if(an.indexOf(selAns) > -1){
  //             $item.addClass('right');
  //           } else {
  //             flag = false;
  //             $item.addClass('wrong');
  //           };
  //           $item.removeClass('sel');
  //         });
  //       }
  //       if(flag){
  //         count++;
  //       }
  //     });
  //     console.log(second, count);
  //     var rate = count / 15 * 100;
  //     if(rate < 100){
  //       var r = confirm('你的正确率 ：'+ rate.toFixed(2)+'%。再做一遍，争取全对。');
  //       if(r){
  //         document.body.scrollTop = document.documentElement.scrollTop = 0
  //         window.location.reload();
  //       }
  //     } else {
  //       var dt = new Date(second);
  //       var time = dt.getSeconds()+'秒'+dt.getMilliseconds();
  //       alert('太棒了，用时：'+time+', 战胜了'+getRndInteger(80, 100).toFixed(2)+'%的全国伙伴！');
  //     }
  //     $('.answer').show();
  //   });

  //   function getRndInteger(min, max) {
  //     return Math.random() * (max - min) + min;
  //   }
  // })()
})