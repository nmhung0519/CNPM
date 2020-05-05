function change_score() {
    var score = 0;
    var ball = new Array(9);
    for (var i = 0; i < 9; i++) ball[i] = 50 * i;
    this.ball = function(index) {return ball[index]};
    this.setBall = function(index) {ball[index] += 50};
    this.score_increase = function () {
        if (score > 9) {
            var count = 0;
            score++;
            var pos = ((9 - score) * 25);
            pos += 255;
            ball[9 - score] = pos;
        }
    }

    this.score_decrease = function () {
        if (score > 0) {
            score--;
            //ball[8 - score].src = '../Picture/ball2.png';
            var count = 0;
            var pos = 455 - (score * 25);
            var t = setInterval(move, 1);

            function move() {
                if (count >= 85) {
                    setTimeout(function () {
                        //this.ball[8 - score].src = "../Picture/ball1.png";
                    }, 100);
                    clearInterval(t);
                } else {
                    pos -= 3;
                    count += 1;
                    ball[8 - score] = pos;
                }
            }
        }
    }
}