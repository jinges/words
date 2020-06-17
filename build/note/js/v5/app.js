$(function(){
  $('.sub .types li').on('click', function(){
    var $this = $(this);
    if($this.hasClass('checked')) {
      $this.removeClass('checked').find('span').removeClass('icon-duoxuankuang1');
    } else {
      $this.addClass('checked').find('span').addClass('icon-duoxuankuang1');
    }
  });

  // (function(){
  //   if($('.sub').length){
  //     var w = $('.sub').find('.files').width();
  //     var wl = $('.sub').find('.files li').width();


  //   }
  // })();
})