let btn= document.getElementById('testBtn');
console.log(btn);

btn.onclick = function (event) {
    console.log("start");
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

    btn.onclick = function () {
        document.removeEventListener('mousemove', onMouseMove);
        console.log("stop");
    }
    function getCoord(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

}