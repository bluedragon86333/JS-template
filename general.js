var images = [];
const imgRoot = "./";


function addImage(name) {
	let temp = new Image();
	temp.src = imgRoot + name + ".png";
	temp.onload = () => {
		let tempArr = [name,temp];
		images.push(tempArr);
	};
}

function drawImg(name,x,y,width,height,direction) {
	for (let i = 0; i < images.length; i++) {
		if (images[i][0] == name) {
			if (arguments.length == 3) {
				context.drawImage(images[i][1], x, y); 
			} else if (arguments.length == 6) {
				rotateAndPaintImage(context,images[i][0],degToRad(direction),x,y,width,height);
			} else if (arguments.length == 5) {
				context.drawImage(images[i][1], x, y,width,height); 
			}
			return;
		}
	}

	const img = new Image();        
	img.src = imgRoot + name + ".png";        
	img.onload = () => {
		if (arguments.length == 3) {
			context.drawImage(img, x, y); 
		} else if (arguments.length == 5) {
			context.drawImage(img, x, y,width,height); 
		}
	};
}

function degToRad(deg) {
	return deg * Math.PI / 180;
}

function rotateAndPaintImage ( context, image, angleInRad , positionX, positionY, axisX, axisY ) {
  context.translate( positionX, positionY );
  context.rotate( angleInRad );
  context.drawImage( image, -axisX, -axisY );
  context.rotate( -angleInRad );
  context.translate( -positionX, -positionY );
}