function  RadMirXAn_Image(image, layer) {
	
	this.x = 0;
	this.y = 0;

	this.enterFrame = function(){	
		context2D.drawImage(image, this.x, this.y);
	}.bind(this);
	
	this.hitTest = function(x, y){
		let hit = false;
		let _mX =  x - this.x;
		let _mY =  y - this.y;

		context2D_hit.clearRect(0, 0, canvas_hit.width, canvas_hit.height);
		context2D_hit.drawImage(image, 0, 0);
		let pixel = context2D_hit.getImageData(_mX, _mY, 1, 1);
		let data = pixel.data;
		//let rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
		if((data[3] / 255)!=0){
			hit = true;
		}else{
			hit = false;
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