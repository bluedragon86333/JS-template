const framerate = 120;

const canvas = document.getElementById('game-canvas'); 
var context = canvas.getContext('2d');


var player = new Player();




function init() {
	player.setVel(2,2);
	player.moveTo(100,50);
	player.width = 32;
	player.costume = "onion";
	player.height = 44;
}


function process() {
	player.process();
}


function draw() {
	context.clearRect(0, 0, 256,192);
	drawImg("onion",0,0);
	player.draw();
}

var mainloop = setInterval(function() {
	
	
	process();
	draw();
	if (1 == 0) {
		clearInterval(mainloop);
	}
},1000 / framerate);