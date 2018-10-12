$(function() {
  var h = $(window).height();
 
  $('#container').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).on('load', function() { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(2000).fadeOut(800);
  $('#loader').delay(1800).fadeOut(300);
  $('#container').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload(){
  $('#container').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}