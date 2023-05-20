class Player extends Sprite {
	
	
	keyInput() {
		if (key.up) {
			this.y -= this.yv;
		}
		if (key.down) {
			this.y += this.yv;
		}
		if (key.right) {
			this.x += this.xv;
		}
		if (key.left) {
			this.x -= this.xv;
		}
	}
	
	
	
	process() {
		this.keyInput();
		this.checkBounds();
	}
}