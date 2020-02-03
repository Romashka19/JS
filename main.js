let btn= document.getElementById('testBtn');
console.log(btn);


btn.onclick = function up(event) {
    console.log("up");
    let coord = getCoord(btn);
    let shiftX = event.pageX - coord.left;
    let shiftY = event.pageY - coord.top;

    btn.style.position = 'absolute';
    btn.style.zIndex = 1000;
    moveAt(event);

    function moveAt(event) {
        btn.style.left = event.pageX - shiftX;
        btn.style.top = event.pageY - shiftY;
    }

    document.onmousemove = function (event) {
        moveAt(event);
    }
    btn.onclick = function () {
        document.onmousemove = null;
        console.log("down");
        btn.onclick = up;
    }
    function getCoord(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}
