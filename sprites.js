class Sprite {
	x = 0;
	y = 0;
	xv = 0;
	yv = 0;
	width = 16;
	height = 16;
	direction = 0;
	size = 1;
	show = true;
	costume = "";
	canLeaveScreen = false;
	
	moveSteps = function(stepCount) {
		this.x += Math.cos(this.direction);
		this.y += Math.sin(this.direction);
	};
	
	moveSteps = function(degrees) {
		this.direction -= degrees;
	};
	
	turnRight = function(degrees) {
		this.direction += degrees;
	};
	
	moveTo = function(newX,newY) {
		this.x = newX;
		this.y = newY;
	};
	
	setDir = function(newDeg) {
		this.direction = newDeg;
	};
	
	draw = function() {
		drawImg(this.costume,this.x,this.y);
	};
	
	setVel = function(newXV,newYV) {
		this.xv = newXV;
		this.yv = newYV;
	};
	
	checkBounds = function() {
		if (!this.canLeaveScreen) {
			if (this.x < 0) {
				this.x = 0;
			}
			if (this.x + this.width * this.size > canvas.width) {
				this.x = canvas.width - this.width * this.size;
			}
			if (this.y < 0) {
				this.y = 0;
			}
			if (this.y + this.height> canvas.height) {
				this.y = canvas.height - this.height;
			}
		}
	};
}