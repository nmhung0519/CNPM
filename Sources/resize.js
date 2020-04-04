window.addEventListener('resize', fixPosition);
function fixPosition() {
    document.getElementById("container").style.top = (window.innerHeight - 600)/3 + "px";
    document.getElementById("container").style.left = (window.innerWidth - 1000)/2 + "px";
}