let btn = document.getElementById('testBtn');

let check = true;
btn.onclick = function(event) {
    if(check == true) {
        btn.style.position = 'absolute';
        btn.style.zIndex = 1000;
        moveAt(event);
        document.onmousemove = moveAt;
        check = false;
    } else {
        document.onmousemove = null;
        check = true;
    }
}
function moveAt(event) {
    btn.style.left = event.pageX - btn.offsetWidth / 2 +'px';
    btn.style.top = event.pageY - btn.offsetHeight / 2 +'px';
}
