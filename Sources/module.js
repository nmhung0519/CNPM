var game = new Array(5);

//Numbers - Title
var game1_title = document.createElement("span");
game1_title.innerText = "Numbers";
game1_title.style.left = "710px";
game1_title.style.fontSize = "30px";
game1_title.style.position = "absolute";

//Numbers - Game 1
var game1_1 = document.createElement("a");
game1_1.href = "Game1.html";
var game1_1_button = document.createElement("div");
game1_1_button.className = "game_button";
game1_1_button.style.right = "0%";
game1_1_button.style.background = "url(../Picture/Game1-Picture.png)";
var game1_1_name = document.createElement("div");
game1_1_name.className = "name";
game1_1_name.innerText = "Let's study the order of numbers. Fill in the blanks";
game1_1_button.appendChild(game1_1_name);
game1_1.appendChild(game1_1_button);

//Numbers - Game 2
var game1_2 = document.createElement("a");
game1_2.href = "Game2.html";
var game1_2_button = document.createElement("div");
game1_2_button.className = "game_button";
game1_2_button.style.right = "28%";
game1_2_button.style.background = "url(../Picture/Game2-Picture.png)";
var game1_2_name = document.createElement("div");
game1_2_name.className = "name";
game1_2_name.innerText = "Introduction to numerical axis. At what point is the grasshopper?";
game1_2_button.appendChild(game1_2_name);
game1_2.appendChild(game1_2_button);

//Numbers - Game 3
var game1_3 = document.createElement("a");
game1_3.href = "Game3.html";
var game1_3_button = document.createElement("div");
game1_3_button.className = "game_button";
game1_3_button.style.right = "56%";
game1_3_button.style.background = "url(../Picture/Game3-Picture.png)";
var game1_3_name = document.createElement("div");
game1_3_name.className = "name";
game1_3_name.innerText = "Put a grasshopper on the point";
game1_3_button.appendChild(game1_3_name);
game1_3.appendChild(game1_3_button);

//Numbers
game[0] = new Array(game1_title, game1_1, game1_2, game1_3);


//Operations - title
var game2_title = document.createElement("span");
game2_title.innerText = "Operations";
game2_title.style.left = "700px";
game2_title.style.fontSize = "30px";
game2_title.style.position = "absolute";

//Operations
game[1] = new Array(game2_title);


//Geometry - title
var game3_title = document.createElement("span");
game3_title.innerText = "Geometry";
game3_title.style.left = "710px";
game3_title.style.fontSize = "30px";
game3_title.style.position = "absolute";

//Geometry
game[2] = new Array(game3_title);


//Measurement - title
var game4_title = document.createElement("span");
game4_title.innerText = "Measurement";
game4_title.style.left = "690px";
game4_title.style.fontSize = "30px";
game4_title.style.position = "absolute";
game[3] = new Array(game4_title);


//Secret Lab - title
var game5_title = document.createElement("span");
game5_title.innerText = "Secret Lab";
game5_title.style.left = "710px";
game5_title.style.fontSize = "30px";
game5_title.style.position = "absolute";

//Secret Lab
game[4] = new Array(game5_title);