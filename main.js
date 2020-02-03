let btn= document.getElementById('testBtn');

btn.onclick = up;
function up(event) {
    btn.style.position = 'absolute';
    btn.style.zIndex = 1000;
    moveAt(event);
    document.onmousemove = move;
    btn.onclick = down;
}

function moveAt(event) {
    btn.style.left = event.pageX - btn.offsetWidth / 2 +'px';
    btn.style.top = event.pageY - btn.offsetHeight / 2 +'px';
}

function move(event) {
    moveAt(event);
}

function down() {
    document.onmousemove = null;
    btn.onclick = up;
}

//old code nested functions
/*btn.onclick = function up(event) {
    console.log("up");

    btn.style.position = 'absolute';
    btn.style.zIndex = 1000;
    moveAt(event);

    function moveAt(event) {
        btn.style.left = event.pageX - btn.offsetWidth / 2 +'px';
        btn.style.top = event.pageY - btn.offsetHeight / 2 +'px';
    }

    document.onmousemove = function (event) {
        moveAt(event);
    }

    btn.onclick = function down() {
        document.onmousemove = null;
        console.log("down");
        btn.onclick = up;
    }

}*/
