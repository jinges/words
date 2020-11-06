$(function(){
  $('.body .nav .cell').on('click', function(){
    var $this = $(this);
    $this.find('a').addClass('active');
    $this.siblings().find('a').removeClass('active');
  });

  $('body').on('click', '.video_bar .shoucang', function(){
    var $this = $(this);
    if($this.hasClass('icon-shoucang2')){
      $this.removeClass('icon-shoucang2')
    } else {
      $this.addClass('icon-shoucang2')
    }
  }).on('click', '.video_bar .prev', function(){
    
  }).on('click', '.video_bar .next', function(){
    
  }).on('click', '.find .more_read', function(){
    var $this = $(this);
    var p = $this.prev().find('p');
    if(p.hasClass('ov')){
      p.removeClass('ov');
      $this.text('收起');
    } else {
      p.addClass('ov');
      $this.text('查看全文');
    }
  });
  
})