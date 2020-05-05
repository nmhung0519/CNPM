function score_increase() {
    if (score > 9) {
        var count = 0;
        score++;
        var pos = ((9 - score) * 25);
        var t = setInterval(move, 1);
        function move() {
            if (count >= 85) {
                clearInterval(t);
            } else {
                pos += 3;
                count++;
                ball[9 - score].style.left = pos + "px";
            }
        }
    }
}
function score_decrease() {
    if (score > 0) {
        score--;
        ball[8 - score].src = '../Picture/ball2.png';
        var count = 0;
        var pos = 455 - (score * 25);
        var t = setInterval(move, 1);

        function move() {
            if (count >= 85) {
                setTimeout(function () {
                    ball[8 - score].src = "../Picture/ball1.png";
                }, 100);
                clearInterval(t);
            } else {
                pos -= 3;
                count += 1;
                ball[8 - score].style.left = pos + "px";
            }
        }
    }
}