const Canvas_Image = function(image, layer) {
	
	this.x = 0;
	this.y = 0;

	this.enterFrame = function(){	
		context2D.drawImage(image, this.x, this.y);
	}.bind(this);
	
	this.hitTest = function(x, y){
		let hit = false;
		let _mX =  x - this.x;
		let _mY =  y - this.y;

		if((0<_mX && _mX<image.width) &&  (0<_mY && _mY<image.height)){
			context2D_hit.clearRect(0, 0, canvas_hit.width, canvas_hit.height);
			context2D_hit.drawImage(image, 0, 0);
			let pixel = context2D_hit.getImageData(_mX, _mY, 1, 1);
			let data = pixel.data;
			//let rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
			if(data[3]!=0){
				hit = true;
				stoppropagation = true;
			}else{
				hit = false;
			}
		}
			
		return hit;
	}

	this.start = function (){
		EnterFrame.addFunction(this.enterFrame, layer);
	}.bind(this);

	this.stop = function (){
		EnterFrame.removeFunction(this.enterFrame);
	}.bind(this);
}