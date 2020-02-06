const img = [
    'pic1.png',
    'woman-standing-on-road-1758144.jpg',
    'black-cassette-tape-on-top-of-red-and-yellow-surface-1626481 (2).jpg',
];

const slider = document.getElementById('slider');
 
let i = 0;
function sliders(){
    if(i < img.length ){

        slider.innerHTML = `<img src="${img[i]}" >`;    
        i++;
    }else{i = 0;}

    setTimeout(sliders,2000);
}

sliders();



