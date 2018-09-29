function userHeaderTmp(user, client){
  var tmp = '';
  var newUserArr = [];
  user.forEach((item, index) => {
    if(item.userId == client.userId) {
      newUserArr.push(item);
      user.splice(index, 1);
    }
  })
  newUserArr = newUserArr.concat(user)

  newUserArr.forEach((obj, index) => {
    tmp += `<div class="${obj.userId == client.userId? 'current_user':'other_user'} user ">
              <div class="photo_bg">
                <p class="photo"><img src="${obj.avatar}" /></p>
              </div>
              <span class="nickname">${obj.name}</span>
            </div>
          </div>`;
    if(!index) {
      tmp += userRecordTmp();
    }
  });
  return tmp;
}

function userRecordTmp(){
  return `<div class="score_box none cell">
            <p class="score"><em>6</em>-<em>5</em></p>
            <p class="timer"><em>35s</em><em>54s</em></p>
          </div>`
}

function userHeaderShow(tmp){
  $('.header').removeClass('hide').html(tmp);
}