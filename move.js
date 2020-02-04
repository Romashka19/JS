let btn= document.getElementById('testBtn');

let leftX = 0;

function move() {
    if(leftX != 500){
        btn.style.marginLeft = leftX+'px';
        leftX++;
    } else {
        clearInterval();
    }

}

setInterval(move,10);