$(function(){
  $('body').on('click', ".xl_btn", function(){
    var lis = $('.nav_class li').clone();
    lis = lis.splice(1);
    $(".all_nav").show().find('ul').html(lis);
  }).on('click', ".nav_close_btn", function(){
    $(".all_nav").hide()
  });

  var swiper = new Swiper('.banner', {
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3500,
    },
  });
})