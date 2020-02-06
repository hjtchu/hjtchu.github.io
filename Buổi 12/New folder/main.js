// function zoomInFunction(imgs) {
//     var expandImg = document.getElementById("mainImg");
//     expandImg.src = imgs.src;
//     expandImg.parentElement.style.display = "block";
//   }



  var imgs = document.querySelectorAll(".sub img" );
  var current = document.querySelector('#mainImg');
  var opacity = 1;

  imgs.forEach(img =>img.addEventListener('click', imgClick));
  imgs.forEach(img => img.style.opacity = 0.4);
  current.src = imgs[0].src;
  imgs[0].style.opacity = opacity;

  function imgClick(e){
    imgs.forEach(img => img.style.opacity = 0.4)
    current.src = e.target.src;
    current.classList.add('fadein');

    setTimeout(() => {
      current.classList.remove('fadein');
    }, 500);
    e.target.style.opacity = opacity;

  }