            function game2() {
                var temp = "none";
                var score = 0;
                this.start = function(count) {
                    if (count == 8) {
                        temp = "eight";
                        if (score == 0) {
                                score = 1;
                            }
                    }
                    else {
                        //count ++;
                        temp = "one";
                        score = 2;
                        //game_display.style.opacity = (count * 0.1) + 0.2;
                        //start_button.style.opacity = 1 - (count * 0.1);
                        }
                    };
                this.test = function() {return temp;};
                this.test2 = function() {return score;};
                

                var game_display = -1;
                var text_display = -1;
                var answer_display = -1;
                this.restart = function() {
                    setTimeout(function () {
                        game_display = 0;
                        text_display = 0;
                        answer_display = 0;
                    }, 300);
                    setTimeout(function () {
                        game_display = 1;
                    next_question();
                    }, 800);
                }
                this.testRestart = function() {return game_display;};
                this.testRestart2 = function() {return text_display;};
                this.testRestart3 = function()  {return game_display;};



                var box_left = -1;
                var box_display = -1;
                this.set_box_block = function(n) {
                    if (n < 10) {
                    box_left = n * 70 ;
                    box_display = 1;
                    }
                    else {
                        box_display = 0;
                    }
                }
                this.set_box_test = function() {return box_left;};
                this.set_box_test2 = function() {return box_display;};


                var length = -1;
                var dialog_text = "none";
                var dialog_left = 0;
                var dialog_display = false;
                var wrong = -1;
                this.try_again = function(index) {
                    length = 0;
                        dialog_text = "true";
                        dialog_left = 100;
                        dialog_display = true;
                    var t = setInterval(function() {
                        if (length == index * 70) {
                            clearInterval(t);
                        }
                        else {
                            length += 70;
                            setTimeout(function () {
                                if (length / 70 < index) {
                                    wrong = 0;
                                }
                                else {
                                        dialog_left = index * 70 + 110;

                                }
                            }, 500);
                        }
                    }, 100);
                }
                this.try_again_test = function() {return dialog_left;}
                this.try_again_test2 = function() {return length;}
                this.try_again_test3 = function() {return wrong;}

                var guide = -1;
                this.next_question = function(index) {
                    if (index == 0) guide = 1;
                    else if (index < 5) {
                        guide = 5;
                        
                    }
                    else if (index < 9) {
                        guide = 9;
                        
                    }
                }
                this.next_question_test = function() {return guide;}

                var canPress = -1;
                var box_border = "none";
                this.listener1 = function(key , index) {
                        if (key == index) {
                               
                                setTimeout(function() {
                                    
                                    dialog_display = 0;
                                }, 100);
                                setTimeout(function() {
                                    if (index == 9) {
                                        text_display = 1;
                                        canPress = 0;
                                    }
                                    
                                }, 500);
                            }
                            else {
                                box_border = "red";
                                score = -1;
                                canPress = 1;
                            }

                }
                this.listener1_test = function() {return canPress;}
                this.listener1_test1 = function() {return text_display;}
                this.listener1_test2 = function() {return box_border;}


            }


