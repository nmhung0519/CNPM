function game3() {
    var stage;
    var score;
    var index;
    var canMove = 0;
    var dot_left = 0;
    var length = 0;
    var grasshopper = 0;
    var home_button = false;
    var game_display = true;
    var guide;
    var guide_display = false;
    var number = new Array(11);
    number[0] = true;
    var check_correct = 1;
    for (var i = 1; i <= 10; i++) number[i] = false;
    var start_button = false;
    var OK_button = false;
    this.setScore = function (n) {score = n;}
    this.setIndex = function(n) {index = n;}
    this.index = function () {return index;}
    this.guide = function () {return guide;};
    this.setCanMove = function () {canMove = 1;}
    this.canMove = function () {return canMove;}
    this.setDot = function (n) {dot_left = n * 70;}
    this.guide_display = function () {return guide_display;}
    this.start_button = function () {return start_button;}
    this.OK_button = function() {return OK_button};
    this.home_button = function () {return home_button;}
    this.score = function () {return score;};
    this.game_display = function() {return game_display;}
    this.number = function(index) {return number[index]};
    this.restart = function restart() {
        if (score == 0) {
            index = 1;
            start_button = true;
            for (var i = 1; i <= 10; i++) number[i] = false;
        } else if (score < 9) {
            stage = 1;
            index = "new question";
            OK_button = true;
            start_button = true;
            for (var i = 1; i < 10; i++) number[i] = false;
            number[10] = true;
        } else {
            home_button = true;
        }
    }

    this.new_question = function () {
        if (stage == 0) {
            if (index < 6) {
                var t = setInterval(jump, 5);
                this.move_highlight(1);
            } else if (index < 10) {
                this.move_highlight(1);
                this.make_question();
            } else {
                if (check_correct == 1) {
                    this.score_increase();
                    setTimeout(this.restart, 100);
                } else {
                    check_correct = 1;
                    setTimeout(function () {
                        game_display.style.display = 'none';
                        dot_left = -4;
                        length = 0;
                        highlight.style.width = "0px";
                        index = 1;
                        for (var i = 1; i < 10; i++) number[i] = false;
                    }, 100);
                    setTimeout(function () {
                        game_display = true;
                    }, 300);
                    setTimeout(function () {
                        game_display = true;
                    }, 500);
                    setTimeout(this.new_question, 1500);
                }
            }
        } else if (stage == 1) {
            give_guide("Move the grasshopper to point " + index);
            this.make_question();
        }
    }

    this.make_question = function make_question() {
        if (stage == 0) {
            if (index < 6) {
                setTimeout(set_box_block, 500, index);
                if (index < 3) setTimeout(correct, 1500);
                else if (index < 6) {
                    setTimeout(set_box_block, 500, index);
                    if (index == 3) setTimeout(function () {
                        give_guide("Write the number");
                    }, 600);
                    setTimeout(canPress = 1, 1000);
                }
            } else if (index < 10) {
                canMove = 1;
                dot.style.cursor = 'pointer';
                give_guide("Now you move the grasshopper 1 step forward");
            } else {
                restart();
            }
        } else if (stage == 1) {
            canMove = 1;
            grasshopper.style.cursor = 'pointer';
        }
        addEventListener('keydown', function (event) {
            if (canPress == 1 && stage == 0) {
                if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
                    var key = event.keyCode - 48;
                    if (key >= 10) key -= 48;
                    if (key == index) {
                        if (box.style.display == "block") {
                            correct();
                            canPress = 0;
                        }
                        setTimeout(function () {
                            guide.style.display = 'none';
                        }, 200);
                    } else {
                        box.innerHTML = key + "";
                        box.style.border = '3px solid red';
                        check_correct = 0;
                    }
                }
            }
        });

        this.correct = function () {
            number[index].style.display = 'block';
            set_box_none();
            setTimeout(index += 1, 999);
            setTimeout(new_question, 1000);
        }
    }

    function mousedown(ev) {
        x = ev.x;
        if (canMove == 1) {
            status = 1;
            document.getElementById("grasshopper").style.marginTop = "-5px";
        }
        document.addEventListener('mousemove', function (evt) {
            if (status == 1) {
                if (now_number == 0) {
                    dot_left = dot_left + event.x - x;
                    x = event.x;
                    if (dot_left < -4) dot.style.left = "-4px";
                    else if (dot_left > 696) dot.style.left = "696px";
                    else dot.style.left = dot_left + "px";
                } else {
                    grasshopper_margin -= event.x - x;
                    x = event.x;
                    if (grasshopper_margin > dot_left + 4) grasshopper.style.marginLeft = (-(dot + 4)) + 'px';
                    else if (grasshopper_margin < (dot_left + 4 - now_number * 70)) grasshopper.style.marginLeft = (-(dot_left + 4 - now_number * 70)) + 'px';
                    else grasshopper.style.marginLeft = (-grasshopper_margin) + "px";
                }
            }
        });
    }

    this.give_guide = function (message) {
        guide = message;
        guide_display = true;
    }

    addEventListener('mouseup', function () {
        if (status == 1) {
            status = 0;
            document.getElementById("grasshopper").style.marginTop = '0px';
            if (now_number == 0) {
                if (dot_left > 696) {
                    dot_left = 696;
                    if (stage == 1) OK_on();
                } else if (dot_left < -4) {
                    dot_left = -4;
                    if (stage == 1) OK_off();
                } else {
                    var tmp = Math.round((dot_left + 4) / 70) * 70 - 4;
                    var change;
                    if (tmp > dot_left) {
                        change = 1;
                    } else change = -1;
                    var t = setInterval(move_to_near, 10);

                    function move_to_near() {
                        if (dot_left == tmp) {
                            clearInterval(t);
                            if (stage == 0) check();
                            else {
                                if (dot_left == -4) OK_off();
                                else OK_on();
                            }
                        } else {
                            dot_left += change;
                            dot.style.left = dot_left + "px";
                        }
                    }

                    function check() {
                        if (dot_left + 4 == 70 * index) {
                            canMove = 0;
                            dot.style.cursor = "default";
                            setTimeout(set_box_block, 500, index);
                            if (stage == 0) setTimeout(function () {
                                guide.style.display = 'none'
                            }, 300);
                            setTimeout(canPress = 1, 1000);
                        }
                    }
                }
            } else if (now_number > 0) {
                if (grasshopper_margin > dot_left + 4) grasshopper_margin = dot_left + 4;
                else if (grasshopper_margin < (dot_left + 4 - now_number * 70)) {
                    grasshopper_margin = dot_left + 4 - (now_number * 70);
                    console.log(grasshopper_margin);
                    canMove = 0;
                    setTimeout(function () {
                        set_box_block(now_number);
                        canMove = 0;
                        give_guide("Write the number");
                    }, 100);
                    setTimeout(function () {
                        canPress = 1;
                    }, 200);
                } else {
                    var tmp = (Math.round(grasshopper_margin / 70)) * 70;
                    var change;
                    if (tmp > grasshopper_margin) change = 1;
                    else change = -1;
                    var t = setInterval(move_to_near, 10);

                    function move_to_near() {
                        if (tmp == grasshopper_margin) {
                            clearInterval(t);
                            if (dot_left + 4 == tmp + now_number * 70) {
                                canMove = 0;
                                setTimeout(function () {
                                    set_box_block(now_number);
                                }, 100);
                                setTimeout(function () {
                                    canPress = 1;
                                    give_guide("Write the number");
                                }, 200);
                            }
                        } else {
                            grasshopper_margin += change;
                            grasshopper.style.marginLeft = (-grasshopper_margin) + "px";
                        }
                    }
                }
            }
        }
    });

    this.check_answer = function () {
        var tryAgain = false;
        var restart = false;
        this.score = function () {return score;}
        this.reStart = function () {return restart;}
        this.tryAgain = function () {return tryAgain;};
        this.number = function (n) {return number[i]};
        OK_button = false;
        if (dot_left != 0) {
            if (dot_left == index * 70) {
                canMove = 0;
                OK_button = false;
                number[index] = true;
                score = 1;
                this.restart();
            } else tryAgain = true;
        }
    }

    this.try_again = function () {
        grasshopper.src = '../Picture/grasshopper2.png';
        dot.style.background = 'red';
        guide.style.display = 'none';
        dot.style.cursor = 'pointer';
        setTimeout(function () {
            var t = setInterval(function () {
                if (grasshopper_margin >= (dot_left + 4)) {
                    clearInterval(t);
                    setTimeout(function () {
                        grasshopper.src = '../Picture/grasshopper1.png'
                    }, 100);
                    setTimeout(next_num, 200);
                } else {
                    grasshopper_margin += 5;
                    grasshopper.style.marginLeft = -grasshopper_margin + "px";
                }
            }, 5);
        }, 200);
    }

    function next_num() {
        if (now_number < index) {
            now_number += 1;
            move_highlight(1);
            setTimeout(function () {
                canMove = 1;
                give_guide("Move the grasshopper 1 step forward");
            }, 400);
        } else setTimeout(function () {
            now_number = 0;
            game_display.style.display = 'none';
            for (var i = 1; i < 10; i++) number[i].style.display = 'none';
            OK_button.style.display = 'none';
            grasshopper_margin = 0;
            grasshopper.style.marginLeft = "0px";
            length = 0;
            highlight.style.width = "0px";
            dot_left = -4;
            dot.style.left = "-4px";
            dot.style.background = 'black';
            setTimeout(function () {
                game_display.style.display = 'block';
                OK_button.style.display = 'block';
                canMove = 1;
                setTimeout(give_guide, 200, "Move the grasshopper to point " + index);
            }, 700);
        }, 200);
    }

    addEventListener('keydown', function (event) {
        if (canPress == 1 && stage == 1) {
            if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
                var key = event.keyCode - 48;
                if (key >= 10) key -= 48;
                if (key == now_number) {
                    number[now_number].style.display = 'block';
                    canPress = 0;
                    setTimeout(set_box_none, 100);
                    setTimeout(function () {
                        guide.style.display = 'none';
                    }, 200);
                    setTimeout(next_num, 300);
                } else {
                    box.innerHTML = key + "";
                    box.style.border = '3px solid red';
                }
            }
        }
    });
}