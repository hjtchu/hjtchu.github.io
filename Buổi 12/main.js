let sliderImages = document.querySelectorAll(".slider");
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }

}
function startSlider(){
    reset();
    sliderImages[0].style.display = 'block';

}
 
function sliderLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    // sliderImages[current - 1].style.transition = 'all';
    // sliderImages[current - 1].style.transition-duration = '1s'
    current--;

}

function sliderRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    // sliderImages[current + 1].style.transition = 'all';
    // sliderImages[current + 1].style.transition-duration = '1s'
    current++;

}

arrowLeft.addEventListener('click', function(){
    if(current == 0){
        current = sliderImages.length;
    }
    sliderLeft();
})

arrowRight.addEventListener('click', function(){
    if(current == sliderImages.length - 1){
        current = -1;
    }
    sliderRight();
})


startSlider();