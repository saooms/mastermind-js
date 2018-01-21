var section = document.getElementsByTagName('section');
var button = document.getElementsByClassName('button');
var start = document.getElementsByTagName('button');
var guess = document.getElementsByClassName('color');
var correct = document.getElementsByClassName('correct');
var miss = document.getElementsByClassName('miss');
var colors = ["red", "green", "darkgreen", "blue", "purple", "gray"];
var cc1 = Math.floor(Math.random() * colors.length);
var cc2 = Math.floor(Math.random() * colors.length);
var cc3 = Math.floor(Math.random() * colors.length);
var cc4 = Math.floor(Math.random() * colors.length);
var mastercode = [cc1, cc2, cc3, cc4];
var guesscode = [];
var x = 0;
var y = 0;
var row = 1;


section[4].onmouseover = function() {appear()};
section[4].onmouseout = function() {dissepear()};

function appear() {
	section[5].style.animation = "0.5s appear forwards";
}

function dissepear() {
	section[5].style.animation = "0.5s dissepear forwards";
}

function launch() {
	section[0].style.animation = "2s launch ease-in forwards";
}

function close() {
	section[0].style.animation = "2s close ease-in forwards"
}

function button_color(colornr) {
	button[colornr].style.animation = "1s press";
	guess[y].style.backgroundColor = colors[colornr];
	guesscode[x] = (colornr);
	x++;
	y++;
	if (x == 4) {

		check();

		guesscode.splice()

		x = 0;
		row++
	}
}

function check() {
	console.log('ga nu checken');
	var position = 0;
	var good = 0;
	var resultc = y - 4;
	var resultw = y - 4;
	mastercode = [cc1, cc2, cc3, cc4];

	for (var i = 0; i < mastercode.length; i++) {
	
		if (guesscode[position] == mastercode[position]) {
			correct[resultc].style.visibility = "visible";
			good++;
			resultc++;
			delete mastercode[position];
			guesscode.splice(position, 1, "used");
		}
		position++;
	}

	position = 0;

	for (var i = 0; i < 4; i++) {

		var q = 0;

		for (var m = 0; m < mastercode.length; m++) {

			if (guesscode[position] == mastercode[q]) {
				miss[resultw].style.visibility = "visible";	
				m = 4;
				resultw++;
				delete mastercode[q];
			}
			q++;		
		}
		console.log('check');
		position++;
	}

	if (good == 4) {
		alert('you beat the mastermind code!!')
		start[0].style.display = "none";
		close()
	}

	else if (row == 12) {
		alert("you failed to complete the mastermind code");
	}
}