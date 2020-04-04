function score_increase() {
    var count = 0;
    score++;
    var pos = 15 + ((9-score) * 25);
    var t = setInterval(move, 1);
    function move() {
        if (count >= 85) {
            clearInterval(t);
        }
        else {
            pos += 3;
            count ++;
            ball[9-score].style.left = pos + "px";
        }
    }
}
function score_decrease() {
    score--;
    ball[8-score].style.background = 'red';
    var count = 0;
    var pos = 465 - (score * 25);
    var t = setInterval(move, 1);
    function move() {
        if (count >= 85) {
            ball[8-score].style.background = "lawngreen";
            clearInterval(t);
        }
        else {
            pos -= 3;
            count += 1;
            ball[8-score].style.left = pos + "px";
        }
    }
}