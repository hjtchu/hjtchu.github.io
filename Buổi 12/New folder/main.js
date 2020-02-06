function zoomInFunction(imgs) {
    var expandImg = document.getElementById("mainImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }