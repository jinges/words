(function(){
  var share = document.querySelector('.share-pannel');
  if(!share) return;
  document.querySelector('.share-icon').addEventListener('click', function(){
    share.style.display = 'block';
  })
})();
(function(){
  var $nav = document.querySelectorAll('.vote-nav span');
  var $panel = document.querySelectorAll('.vote-content .panel');
  
  navList(function(span, i){
    span.addEventListener('click', function(e){
      navList(function(span){
        span.className = '';
        span.classList.remove('active');
      });
      e.target.classList.add('active');
      
      $panel.forEach(function(item, j){
        item.classList.remove('active');
        if (i == j) {
          item.classList.add('active');
        }
      });
    });
  });

  function navList(cb){
    $nav.forEach(function(span, i){
      cb(span, i);
    })
  };
})();

(function(){
  var str = '';
  var rank = document.querySelector('.rank');
  if(!rank) return;
  for(var i=0; i < 10; i++) {
    str += `<li class="grid">
    <span class="num">${i+1}</span>
    <span>
      <img class="photo" src="../assets/img/zhang.png" alt="">
      <em>张晓明</em>
    </span>
    <span>共计<em class="count">3254</em>票</span>
  </li>`
  };

  rank.innerHTML = str;
})();
(function(){
  var vote = document.querySelector('#vote');
  var barrage = document.querySelector('#barrage');
  var barragePanel = document.querySelector('.barrage-panel');
  var msgPanel = document.querySelector('.msg-panel');

  if(!barrage || !vote) return;

  barrage.addEventListener('click', function(){
    barragePanel.style.cssText = 'display: block';
  });

  vote.addEventListener('click', function(){
    msgPanel.style.cssText = 'display: block';
    setTimeout(function(){
      msgPanel.style.cssText = 'display: none';
    }, 600);
  });

  document.querySelector('#sedBarrage').addEventListener('click', function(){
    barragePanel.style.cssText = 'display: none';
  });

})();