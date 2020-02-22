var x = document.getElementById("main-menu1");

var clickAction = document.getElementById('clickmenu');

 clickAction.onclick = clickFunction;

function showBlock(){
  x.style.left = '0'
  x.style.transitionDuration = '1.5s';
 }

function showNone(){
  x.style.left = '-500px';
  x.style.transitionDuration = '1.5s';


}


 function clickFunction() {
  if(clickAction.dataset.order =='block'){
    clickAction.dataset.order ='none';
   showBlock();
  } else {
    clickAction.dataset.order = 'block';
    showNone();
  }

 }

 