var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');


function indicator (e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(hover => {
    hover.addEventListener('mouseover', (e) => {
        indicator(e.target);
    })
})