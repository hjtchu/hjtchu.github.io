document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json',true);

    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('div').innerHTML = JSON.parse(this.responseText).age;
        }
    }
    xhr.send()
 }
