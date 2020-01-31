let btn= document.getElementsByTagName('button');
let bul = btn[1];
console.log(bul);

btn.onmousedown = function (event) {
    let coord = getCoord(btn);
    let shiftX = event.pageX - coord.left;
    let shiftY = event.pageY - coord.top;

    btn.style.position ='absolute';
    btn.style.zIndex = 1000;
    document.body.appendChild(btn)
    moveAt(event);
    function moveAt(event) {
        btn.style.left = event.pageX - shiftX ;
        btn.style.top = event.pageY- shiftY;
    }

    function onMouseMove(event){
        moveAt(event)
    }

    document.addEventListener('mousemove', onMouseMove);

    btn.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        btn.onmouseup = null;
    }
    function getCoord(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}