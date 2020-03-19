// var clickbutton = document.getElementById('clickmenu');
// var video = document.getElementById('video');

// clickbutton.onclick =   clickFunction;

// function clickFunction(){
//     if(clickbutton.dataset.order == 'block'){
//         clickbutton.dataset.order = 'none';
//         video.style.left = '-500px';
//          video.style.transitionDuration = '1.5s'

//     } else {
//         clickbutton.dataset.order = 'block';
//         video.style.left = '0px';
//     }
// }


/*select langague*/
 var langague = document.getElementById('langague');
 var selectLangague = document.getElementById('select-langague');

//  var bodyselect = document.getElementsByClassName('container');


//  bodyselect.onclick = bodyclickFunction;


 langague.onclick = selectLangagueFunction;


 function selectLangagueFunction(){
     if(langague.dataset.order == 'opacity0'){
        langague.dataset.order = 'opacity1';
        selectLangague.style.zIndex = '11';

     }else{
        langague.dataset.order = 'opacity0';
        selectLangague.style.zIndex = '-1';
     }
 }



 var screensize = document.getElementById('container');

 var clickmenu = document.getElementById('clickmenu');
 var clickmenuSecond = document.getElementById('clickmenu-second');
 var menu = document.getElementById('menu');

 clickmenu.onclick = clickmenuFunction;
 clickmenuSecond.onclick = clickmenuSecondFunction;

 function clickmenuFunction(){
     clickmenu.style.display = 'none';
    clickmenuSecond.style.display = 'block';
    menu.style.display = 'flex';
   
 
 }



 function clickmenuSecondFunction(){
     menu.style.display = 'none';
    clickmenuSecond.style.display = 'none';
    clickmenu.style.display = 'block'
    
 }
//  function bodyclickFunction(){
//      if(langague.dataset.order = 'opacity1'){
//         langague.dataset.order = 'opacity0';
//         selectLangague.style.opacity = '0';
//      }
     
//  }