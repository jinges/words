'use strict';

$(function () {
  $('.group').on('click', 'li', function () {
    var $this = $(this);
    var list = $this.parent().find('img');
    var index = $this.index();
    var wrapper = $('.swiper-wrapper');
    var sw = window.screen.width;
    wrapper.html('').siblings('.loading').show();
    list.map(function (i, img) {
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
    setTimeout(function () {
      var active = wrapper.css({ 'transform': 'translate3d(' + sw * index * -1 + 'px, 0px, 0px)' }).find('.swiper-slide').eq(index);
      active.addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active').removeClass('swiper-slide-next');
      if (active.prev().length) {
        active.prev().addClass('wiper-slide-prev');
      }
      if (active.next().length) {
        active.next().addClass('wiper-slide-next');
      }
    }, 200);
    setTimeout(function () {
      wrapper.siblings('.loading').hide();
    }, 400);
  });

  $('.swiper-container').on('click', '.swiper-slide', function () {
    $(this).parents('.swiper-container').hide();
  });

  $('.imgbox').on('click', 'li', function () {
    var $this = $(this);
    var list = $this.parent().find('img');
    var index = $this.index();
    var wrapper = $('.swiper-wrapper');
    var sw = window.screen.width;
    wrapper.html('').siblings('.loading').show();
    list.map(function (i, img) {
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
    setTimeout(function () {
      var active = wrapper.css({ 'transform': 'translate3d(' + sw * index * -1 + 'px, 0px, 0px)' }).find('.swiper-slide').eq(index);
      active.addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active').removeClass('swiper-slide-next');
      if (active.prev().length) {
        active.prev().addClass('wiper-slide-prev');
      }
      if (active.next().length) {
        active.next().addClass('wiper-slide-next');
      }
    }, 200);
    setTimeout(function () {
      wrapper.siblings('.loading').hide();
    }, 400);
  });

  $('#copy').on('click', function () {
    if ($('.toast').length) {
      return false;
    }
    var toast = $('<div class="toast">复制成功</div>');

    $('body').append(toast);

    setTimeout(function () {
      $('.toast').remove();
    }, 3000);
  });

  (function () {
    if ($('.index').length) {
      var imgs = $('.imgs');
      var bw = screen.width - imgs.offset().left * 2;
      var w = (bw - 6) / 2;
      var h = w * 4 / 3;
      var c = imgs.find('li').length;

      imgs.css('width', bw + 'px').find('ul').css('width', w * c + 6 * (c - 1) + 'px').find('li').css({ 'width': w + 'px', 'height': h + 'px' });

      var grop = $('.group li');
      var gw = grop.width();

      grop.css('height', gw + 'px');
    }
  })();

  (function () {
    var startTime = new Date();
    $('body').on('click', '.sigle .option p', function () {
      $(this).addClass('sel').siblings().removeClass('sel');
    }).on('click', '.multiple .option p', function () {
      var $this = $(this);
      if ($this.hasClass('sel')) {
        $(this).removeClass('sel');
      } else {
        $(this).addClass('sel');
      }
    }).on('click', '.question .sub', function () {
      var endTime = new Date();
      var second = endTime - startTime;
      var answer = ['A', 'B', 'C', 'D'];
      var defaultAns = [["A"], ["A"], ["A"], ["D"], ["D"], ["B"], ["C"], ["B"], ["B"], ["C"], ["C"], ["B"], ["A", "B", "C", "D"], ["B", "C", "D"], ["A", "B"]];
      // $('.answer').map((j,an)=> {
      //   var an = $(an).text().split(':')[1].split('');
      //   defaultAns.push(an);
      // });

      var count = 0;
      $('.option').map(function (i, obj) {
        var an = defaultAns[i];
        var flag = false;
        var userSel = $(obj).find('.sel');
        if (userSel.length) {
          flag = true;
          userSel.map(function (j, item) {
            var $item = $(item);
            var index = $item.index();
            var selAns = answer[index];
            if (an.indexOf(selAns) > -1) {
              $item.addClass('right');
            } else {
              flag = false;
              $item.addClass('wrong');
            };
            $item.removeClass('sel');
          });
        }
        if (flag) {
          count++;
        }
      });
      console.log(second, count);
      var rate = count / 15 * 100;
      if (rate < 100) {
        var r = confirm('你的正确率 ：' + rate.toFixed(2) + '%。再做一遍，争取全对。');
        if (r) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          window.location.reload();
        }
      } else {
        var dt = new Date(second);
        var time = dt.getSeconds() + '秒' + dt.getMilliseconds();
        alert('太棒了，用时：' + time + ', 战胜了' + getRndInteger(80, 100).toFixed(2) + '%的全国伙伴！');
      }
      $('.answer').show();
    });

    function getRndInteger(min, max) {
      return Math.random() * (max - min) + min;
    }
  })();
});