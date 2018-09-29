;$(function(){

function startScan(){
  var user = JSON.parse(window.localStorage.getItem('user'));
  $('#photo img').attr('src', user.avatar);
  return user;
};

function endScan(){
  $(".scan_box").remove();
};