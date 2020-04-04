var start_button = document.getElementById("start_button");
var start_button_1 = document.getElementById("start_button_1");
var start_img = document.getElementById("start_img");
function over() {
    start_button.style.left = "420px";
    start_button.style.top = "295px"
    start_button.style.width = "160px";
    start_button.style.height = "160px";
    start_button_1.style.left= "20px";
    start_button_1.style.top= "20px";
    start_img.src = "../Picture/Start1.png";
}
function out() {
    start_button.style.left= "425px";
    start_button.style.top = "300px";
    start_button.style.width = "150px";
    start_button.style.height = "150px";
    start_button_1.style.left= "15px";
    start_button_1.style.top= "15px";
    start_img.src = "../Picture/Start0.png";
}