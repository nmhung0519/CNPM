describe("Tăng điểm", function() {
    function check1(index, checker) {
        var scr = new change_score();
        scr.score = 0;
        checker = true;
        for (var i = 9 - index; i < 9; i++) scr.setBall(i);
        scr.score_increase();
        setTimeout(function() {
            if (scr.score != index) checker = false;
            else {
                for (var i = 0; i <= index; i++) if (scr.ball(i) != i * 50) {
                    checker = false;
                }
                for (var i = 10 - index; i < 9; i++) if (scr.ball(i) != i * 50 + 255) {
                    checker = false;
                    return 0;
                }
            }
        }, 85);
    }
    it("Điểm = 0", function () {
        var checker;
        check1(0, checker);
        expect(checker).toBe(true);
    })
    it("Điểm = 3", function () {
        var checker = true;
        check1(3, checker);
        expect(checker).toBe(true);
    })
    it("Điểm = 8", function () {
        var checker = true;
        check1(8, checker);
        expect(checker).toBe(true);
    });
});
describe("Giảm điểm", function() {
    function check2(index, checker) {
        var scr = new change_score();
        scr.score = 0;
        checker = true;
        for (var i = 0; i < index; i++) if (scr.ball[i] != i * 50) {
            checker = false;
            return 0;
        }
        for (var i = 9 - index; i < 9; i++) if (scr.ball(i) != i * 50 + 255) {
            checker = false;
            return 0;
        }
        scr.score_increase();
        setTimeout(function() {
            if (scr.score != index) checker = false;
            else {
                for (var i = 0; i <= index; i++) if (scr.ball[i] != i * 50) {
                    checker = false;
                    return 0;
                }
                for (var i = 10 - index; i < 9; i++) if (scr.ball(i) != i * 50 + 255) {
                    checker = false;
                    return 0;
                }
            }
        }, 85);
    }
})
describe("Restart", function() {
    function check_restart(index) {
        var checker = true;
        var tmp = new game3();
        switch (index) {
            case 0:
                tmp.score = 0;
                tmp.restart();
                if (tmp.start_button == false) checker = false;
                if (tmp.number(0) == false) checker = false;
                for (var i = 1; i <= 10; i++) if (tmp.number(i) == true) checker = false;
                if (tmp.OK_button == true) checker = false;
                if (tmp.home_button == true) checker = false;
                break;
            case 5:
                tmp.score = 5;
                tmp.restart();
                if (tmp.start_button == false) checker = false;
                if (tmp.number(0) == false) checker = false;
                for (var i = 1; i <= 10; i++) if (tmp.number(i) == true) checker = false;
                if (tmp.OK_button == false) checker = false;
                if (tmp.home_button == true) checker = false;
                break;
            case 9:
                tmp.score = 9;
                tmp.restart();
                if (tmp.start_button == true) checker = false;
                if (tmp.home_button == false) checker = false
                break;
        }
        return checker;
    }
    it("Score = 0", function() {
        expect(check_restart(0)).toBe(true);
    })
    it ("Score = 5", function() {
        expect(check_restart(5)).toBe(true);
    })
    it ("Score = 9", function() {
        expect(check_restart(9)).toBe(true);
    })
})
describe("New question", function () {
    it ("Stage = 0 - Score = 0", function () {

    });
    it ("Stage = 1 - Score = 4", function() {

    })
    it ("Stage = 1 - Score = 7", function() {

    })
})
describe("Give guide", function() {
    function check_give_guide (message) {
        var tmp = new game3();
        tmp.give_guide("Now you move the grasshopper 1 step forward");
        return (tmp.guide_display() == true && tmp.guide() == "Now you move the grasshopper 1 step forward");
    }
    it ("Message: Now you move the grasshopper 1 step forward", function() {
        expect(true).toBe(check_give_guide("Now you move the grasshopper 1 step forward"));
    })
    it ("Message: Move the grasshopper to point 4", function() {
        expect(true).toBe(check_give_guide("Move the grasshopper to point 4"));
    })
    it ("Message: Write the number", function() {
        expect(true).toBe(check_give_guide("Write the number"));
    })
})
describe("Check answer", function() {
    function check_check_answer(i) {
        var tmp = new game3();
        switch (i) {
            case 1:
                tmp.setCanMove();
                tmp.setIndex(2);
                tmp.setDot(3*70);
                tmp.setScore(0);
                tmp.check_answer();
                var checker = true;
                if (tmp.check_answer.tryAgain == false) checker = false;
                if (tmp.canMove == 0) checker = false;
                if (tmp.check_answer.reStart == true) checker = false;
                if (tmp.score() != 0) checker = false;
                for (var j = 1; j < 10; j++)
                    if (tmp.number(j) == true) checker = false;
                break;
            case 2:
                tmp.setCanMove();
                tmp.setIndex(4);
                tmp.setDot(4*70);
                tmp.setScore(0);
                tmp.check_answer();
                var checker = true;
                if (tmp.check_answer.tryAgain == true) checker = false;
                if (tmp.canMove == 1) checker = false;
                if (tmp.check_answer.reStart == false) checker = false;
                //if (tmp.score() == 0) checker = false;
                if (tmp.number(4) == false) checker = false;
                for (var j = 1; j < 10; j++)
                    if (j != 4) if (tmp.number(j) == true) checker = false;
                break;
            case 3:
                tmp.setCanMove();
                tmp.setIndex(7);
                tmp.setDot(280);
                tmp.setScore(0);
                tmp.check_answer();
                var checker = true;
                if (tmp.check_answer.tryAgain == false) checker = false;
                if (tmp.canMove == 0) checker = false;
                if (tmp.check_answer.reStart == true) checker = false;
                if (tmp.score() != 0) checker = false;
                for (var j = 1; j < 10; j++)
                    if (tmp.number(j) == true) checker = false;
                break;
        }
        return checker;
    }
    it ("Index = 2 - Dot = 3 ", function () {
        expect(true).toBe(check_check_answer(1));
    })
    it ("Index = 4 - Dot = 4", function() {
        expect(true).toBe(check_check_answer(2));
    })
    it ("Index = 7 - Dot = 4", function() {
        expect(true).toBe(check_check_answer(3));
    })
})
