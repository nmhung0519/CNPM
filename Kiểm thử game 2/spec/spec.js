

describe("Start", function() {
	it("count = 8 , 1", function() {
		var scr = new game2();
		scr.start(8);
		expect("eight").toBe(scr.test());
		expect(1).toBe(scr.test2());
		scr.start(1);
		expect("one").toBe(scr.test());
		expect(2).toBe(scr.test2());
	})
});


describe("restart", function() {
	it("checking" , function() {
		var scr = new game2();
		scr.restart();
		setTimeout(function() {
			expect(0).toBe(scr.testRestart());
			expect(0).toBe(scr.testRestart2());
		} , 300);
		setTimeout(function() {
			expect(1).toBe(scr.testRestart3());
		} , 800)
	})
});


describe("set_box_block" , function() {
	it(" n = 8 and 11" , function() {
		var scr = new game2();
		scr.set_box_block(8);
		expect(560).toBe(scr.set_box_test());
		expect(1).toBe(scr.set_box_test2());
		scr.set_box_block(11);
		expect(0).toBe(scr.set_box_test2());
	})
});


describe("try_again" , function() {
	it("index = 3 and 15", function() {
		var scr = new game2();
		scr.try_again(3);
		expect(100).toBe(scr.try_again_test());
		setTimeout(function() {
			expect(70).toBe(scr.try_again_test2());
		} , 100)
		setTimeout(function() {
			expect(210).toBe(scr.try_again_test2());
		} , 500)
		scr.try_again(15);
		var n = 0;
		setInterval(function() {
			expect(70 * n).toBe(scr.try_again_test2());
			expect(0).toBe(scr.try_again_test3());
			n++;
			if(n === 15) {	
				expect(1160).toBe(scr.try_again_test());
				clearInterval();
			}
		} , 100);
		
	})
});

describe("next_question" , function() {
	it("index = 0 , 4 , 8", function() {
		var scr = new game2();
		scr.next_question(0);
		expect(1).toBe(scr.next_question_test());
		scr.next_question(4);
		expect(5).toBe(scr.next_question_test());
		scr.next_question(8);
		expect(9).toBe(scr.next_question_test());
	})
});


describe("listener" , function() {
	it("index = 1 and 9 , key = 3 and 9", function() {
		var scr = new game2();
		scr.listener1(9 , 9);
		setTimeout(function() {
			expect(0).toBe(scr.listener1_test());
			expect(1).toBe(scr.listener1_test1());
		} , 600);
		scr.listener1(3 , 1);
		expect(1).toBe(scr.listener1_test());
		expect("red").toBe(scr.listener1_test2());
	})
});



