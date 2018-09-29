var progress_bg = $('#pro1');
var progress = $('#pro2');
var countdownNum = $("#cutdow");
var restart = null;
var timer = null;

var start = 0;
var L = 2 * Math.PI * 82;

var isSelected = false;
var userTime = 0;

function resourceTmp(resource) {
  var obj = resource.splice(0, 1)[0];
  var answerTmp = '';
  obj.answerArr.forEach((item, index) => {
    answerTmp += `<li><span>${item}</span></li>`
  })

  var tmp = `<div class="question">
              <span>${obj.word}</span>
            </div>
            <div class="answers">
              <ul>
                ${answerTmp}
              </ul>
            </div>`
  $('#resource').html(tmp)
}

function resourceShow(resource) {
  resourceTmp(resource);

  setTimeout(function () {
    $(".game_pannel").removeClass('hide');
    interaction();
    progressFun();
  }, 7000)
}

function progressFun() {
  start = 0;
  progress_bg.attr('stroke', '#2E7D32');
  countdownNum.attr('fill', '#2E7D32');

  clearInterval(timer);
  timer = setInterval(function () {
    if (!(start % 50)) {
      var num = start / 50;
      if (num >= 7) {
        progress_bg.attr('stroke', '#f00');
        countdownNum.attr('fill', '#f00');
      }
      countdownNum.text((10 - num));
    }
    var val = start.toString() + " ," + (L - start);

    progress.attr('stroke-dasharray', val);

    if (start > 500) {
      progressFun();
      return false;
    }
    start += 10;
  }, 200)
}

function progressBackFun() {
  progress_bg.attr('stroke', '#2E7D32');
  countdownNum.attr('fill', '#2E7D32');
  var backer = setInterval(function () {
    start -= 50;
    var val = start.toString() + ", " + (L - start);
    progress.attr('stroke-dasharray', val);

    if (!(start % 50)) {
      var num = start / 50;
      countdownNum.innerHTML = (10 - num).toString();
    }

    if (start < 1) {
      clearInterval(backer);
      progressFun();
    }
  }, 100)
}

function interaction() {
  $(".answers ul li").on("click", function (e) {
    debugger;
    if (isSelected) {
      return
    }
    $(this).addClass('selected');
    clearInterval(timer);

    isSelected = true;
    sendMsg({
      code: 1,
      houseId: client.houseId,
      userId: client.userId,
      answer:{
        index: 0,
        chooseIndex: $(this).index()
      }
    })
    setTimeout(function(){
      resourceShow(resource);
      progressBackFun();
      isSelected = false;
    }, 3000)
  })
}

