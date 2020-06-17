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

  //温馨提示
  var obj = {
    dom: '#change', //注册dom
    title: '温馨提示', //弹框头
    content: '<p>老师，你刚才分享的文章尚未带上你的名片信息，为了避免本该属于你的客户丢失，下次分享前记得点击"换成我的"按钮<\/p>', //内容
    btns: ['暂时不换', '换成我的'], //取消，保存按钮
    success: function(){
        //保存按钮回调
    },
    cancel: function(){
        //取消按钮回调
    }
  };
 new Dialog(obj);

 //配文
 var obj = {
  dom: '#peiwen',
  title: '配文',
  content: '<textarea class="peiwen_text">老师，你刚才分享的文章尚未带上你的名片信息，为了避免本该属于你的客户丢失，下次分享前记得点击"换成我的"按钮<\/textarea>',
  btns: ['复制配文'],
  success: function(){
      this.toast('保存成功');
  }
};
new Dialog(obj);
 
});

function Dialog(obj){
  if(!obj.content.length) {
    return false;
  };
  if(obj.btns.length > 1){
    obj.cancel_btn = obj.btns[0];
    obj.agree_btn = obj.btns[1];
  } else if(obj.btns.length == 1){
    obj.agree_btn = obj.btns[0];
  };

  if(!obj.title.length) {
    obj.title = '温馨提示';
  }

  Object.assign(obj, {id: (+new Date()).toString(32)});
  Object.assign(this, obj);

  this.addEvents();
}

Dialog.prototype = {
  render: function(){
    var $this = this;
    var temp = `
        <article class="dialog" id="${$this.id}">
        <div class="musk"></div>
        <div class="dialog_box">
          <h1>${$this.title}</h1>
          <div class="contetn">
            ${$this.content}
          </div>
          <div class="footer">
            ${
              $this.cancel_btn?`<span class="btn cancel_btn">${$this.cancel_btn}</span>`: ''
            }

            ${
              $this.agree_btn?`<span class="btn agree_btn">${$this.agree_btn}</span>`: ''
            }
          </div>
        </div>
      </article>
    `;
    $('body').append(temp).on('click', '.agree_btn', function(){
      $this.success();
      $this.close();
    }).on('click', '.cancel_btn', function(){
      $this.cancel();
      $this.close();
    });
  },
  toast: function(str){
    var temp = `<span class="toast" id="${this.id}">${str}</span>`;
    $('body').append(temp);
    setTimeout(() => {
      $('body').find('.toast').remove();
    }, 1000);
  },
  addEvents: function(){
    var $this = this;
    $('body').on('click', $this.dom, function(){
      $this.render();
    })
  },
  close: function(){
    $('body').find('#'+ this.id).remove();
    delete this;
  }
}
