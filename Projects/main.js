var clickleft = document.getElementById('clickleft');
var clickright = document.getElementById('clickright');
var partner = document.getElementById('partner-img');
clickleft.onclick = clickleftfunction;

var current = -20;
var x = 20;
function clickleftfunction(){
  // partner.style.left = '0%';

if(current<=0 && current>=-60){
  partner.style.left = current + '%'; 
  return current=current-20;
}
  }

  clickright.onclick = rightfunction;
function rightfunction(){
  current = current + 20;
  partner.style.left = current + '%';
}