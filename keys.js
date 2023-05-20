var key = {
	"up":false,
	"down":false,
	"right":false,
	"left":false
};

document.body.onkeydown = function(e) {
	if (e.keyCode == 37) {
		key.left = true;
	}
	if (e.keyCode == 38) {
		key.up = true;
	}
	if (e.keyCode == 39) {
		key.right = true;
	}
	if (e.keyCode == 40) {
		key.down = true;
	}
}

document.body.onkeyup = function(e) {
	if (e.keyCode == 37) {
		key.left = false;
	}
	if (e.keyCode == 38) {
		key.up = false;
	}
	if (e.keyCode == 39) {
		key.right = false;
	}
	if (e.keyCode == 40) {
		key.down = false;
	}
}
