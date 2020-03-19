
// JS for nav

window.onscroll = function() {scrollFunction()};
var nav = document.getElementById('nav')
var sticky = nav.offsetTop
// function scrollFunction()
// {
//     if(document.body.scrollTop>200 || document.documentElement.scrollTop>200)
//     {
//         document.getElementById('nav').classList="nav fade-down"
//         document.getElementById('logo').style.maxWidth="60%"
//     }
//     else
//     {
//         document.getElementById('nav').classList="nav"
//         document.getElementById('logo').style.maxWidth="40%"

//     }
// }

function scrollFunction()
{
    if(window.pageYOffset >=sticky+sticky)
    {
        nav.classList.add('fade-down');
        document.getElementById('logo').style.maxWidth='40%';
        nav.style.borderBottom="0.5px solid #eeeeee";
        
    }
    else
    {
        nav.classList.remove('fade-down');
        document.getElementById('logo').style.maxWidth='50%'
        nav.style.borderBottom="";

    }
}




// js for banner

var slideIndex=1;
showSlides(slideIndex);

// function plusSlides(n)
// {
//     showSlides(slideIndex +=n);
// }
function currentSlide(n)
{
    showSlides(slideIndex=n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("slideShows");
    var dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}    
    // if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

